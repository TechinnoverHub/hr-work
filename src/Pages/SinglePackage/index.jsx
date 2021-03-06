import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Hero from 'Components/Hero';
import BreadCrumbs from 'Pages/BreadCumbs';
import { useHistory, useParams, Link as LinkTo } from 'react-router-dom';

import { Link } from 'react-scroll';
import { getPackage } from 'Services/Package.service';
import { useCartDispatch } from 'Context/cart.context';
import Spinner from 'Components/Spinner';
import PackageItem from 'Components/PackageItem';

const packageImg =
  'https://res.cloudinary.com/hrworkmanager/image/upload/q_auto:best,f_auto/v1580899354/packages-header-image_ovgunu.png';

function RadioGroup({ detail, handleChange, selectedItem }) {
  return (
    <div className="hr-work-radio-group">
      <label htmlFor={detail.name}>
        <input
          type="radio"
          name={detail.name}
          id={detail.name}
          value={detail.name}
          checked={selectedItem.name === detail.name}
          onChange={e => handleChange(e, detail)}
        />{' '}
        {detail.name}
      </label>
    </div>
  );
}

const PlanItem = ({ item, productType }) => {
  console.log(item);

  return (
    <div className="plan-table-gold">
      <div className="plan-table-gold-text">
        <h3>{item.name}</h3>
        <div className="plan-table-gold-line"></div>
        <ul className="plan-gold-list-item">
          {item.details.map(detail => (
            <li className="plan-gold-each-list" key={detail}>
              <i className="fa fa-bolt"></i>
              {detail}
            </li>
          ))}
        </ul>
        <div className="plan-table-gold-price">
          {/* <span className="gold-dollar-sign"></span> */}
          <span className="gold-price">
            {item.discountPrice ? (
              <React.Fragment>
                <span
                  style={{
                    fontSize: '17px',
                    textDecoration: 'line-through'
                  }}
                >
                  ₦{item.price.toLocaleString()}
                </span>
                <br />₦{item.discountPrice.toLocaleString()}
              </React.Fragment>
            ) : (
              `₦${item.price.toLocaleString()}`
            )}
          </span>
          {productType === 'RETAINERSHIP' && (
            <span className="gold-year">/Month</span>
          )}
        </div>
      </div>
    </div>
  );
};

function SinglePackage() {
  const history = useHistory();
  const params = useParams();
  const [planData, setPlanData] = useState({});
  const [relatedPlans, setRelatedPlans] = useState([]);
  const [reqStatus, setReqStatus] = useState('');
  const [selectedPlan, setSelectedPlan] = useState({});
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  // const cart = useCartState();
  const dispatch = useCartDispatch();

  const category =
    planData.productType && planData.productType.toLocaleLowerCase();

  const mergeData = (_selectedPlan, _planData) => {
    return {
      ..._planData,
      plan_code: _planData.plan_code || _selectedPlan.plan_code,
      price: _planData.price || _selectedPlan.price,
      discountPrice: _planData.discountPrice || _selectedPlan.discountPrice,
      planName: _selectedPlan.name || null,
      details: _selectedPlan.details || _planData.details,
      planId: _selectedPlan._id || null,
      id: _planData._id || null
    };
  };

  const fetchPackage = async productCode => {
    try {
      setReqStatus('FETCHING');
      const { data: response } = await getPackage({ productCode });
      if (response.status === 'success') {
        setReqStatus('SUCCESS');
        setPlanData(response.data.package);
        setRelatedPlans(response.data.related);
      }
    } catch (error) {
      setReqStatus('ERROR');
    }
  };

  const handleChange = (_e, plan) => {
    setSelectedPlan(plan);
    setPrice(plan.price);
    setDiscountPrice(plan.discountPrice || 0);
  };

  const isRetainership = _planData => {
    return _planData.productType.toLocaleLowerCase() === 'retainership';
  };

  useEffect(() => {
    const productCode = params.slug.split('_')[1];
    fetchPackage(productCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    // setChecked()
    if (planData.plans && planData.plans.length > 0) {
      // setChecked(planData.plans[0].name);
      setPrice(planData.plans[0].price);
      setDiscountPrice(planData.plans[0].discountPrice || 0);
      setSelectedPlan(planData.plans[0]);
    } else {
      let price;

      if (planData.discountPrice) {
        price = planData.discountPrice || 0;
      } else {
        price = planData.price || 0;
      }

      setPrice(price);
    }
  }, [planData]);

  if (reqStatus === 'FETCHING') {
    return <Spinner />;
  }

  const addToCartHandler = (_selectedPlan, _planData) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: mergeData(_selectedPlan, _planData)
    });
  };

  const contactUsHandler = title => {
    history.push({
      pathname: '/contact',
      state: {
        subject: `Inquiry about ${title}`
      }
    });
  };

  const ButtonCustom = ({ onClick, text }) => {
    return (
      <button className="single-package-link-button" onClick={onClick}>
        {text}
      </button>
    );
  };

  return (
    <div>
      <Header />
      <Hero imgUrl={packageImg} heroTitle="Our Packages" />
      {reqStatus === 'ERROR' ? (
        <h2 className="single-package-page-error">
          Something went wrong, Please try again later.
        </h2>
      ) : null}

      {reqStatus === 'SUCCESS' && Object.keys(planData).length > 0 ? (
        <div className="single-package-section">
          <div className="single-package-breadcrumbs-container">
            <BreadCrumbs category={category} categoryItem={planData.title} />
          </div>
          <div className="hr-remote-manager-section">
            <div className="hr-remote-manager-wrapper">
              <div className="hr-remote-manager-image"></div>
              <div className="hr-remote-manager-text">
                <h3>{planData.title}</h3>
                {planData.plans.length > 0 ? (
                  <div className="hr-work-plan-text">
                    <p className="hr-work-plan-text-action">Select Your Plan</p>
                    <div className="hr-work-plan-radio">
                      {planData.plans.map(plan => (
                        <RadioGroup
                          detail={plan}
                          selectedItem={selectedPlan}
                          handleChange={handleChange}
                          key={plan._id}
                        />
                      ))}
                    </div>

                    <div className="compare-plan">
                      <Link
                        to="plans"
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                      >
                        Click to compare plans
                      </Link>
                    </div>
                  </div>
                ) : null}

                {planData.details.length > 0 ? (
                  <>
                    <p className="hr-work-plan-text-action">Description</p>
                    <ul className="hr-work-ul-list">
                      {planData.details.map(detail => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                {price > 0 ? (
                  <div className="single-package-amount">
                    <span className="big-amount">
                      {planData.discountPrice && (
                        <span
                          style={{
                            fontSize: '20px',
                            color: '#000',
                            opacity: '0.7',
                            textDecoration: 'line-through'
                          }}
                        >
                          ₦{planData.price.toLocaleString()}
                        </span>
                      )}
                      {discountPrice ? (
                        <React.Fragment>
                          <span
                            style={{
                              color: '#000',
                              opacity: '0.7',
                              fontSize: '20px',
                              textDecoration: 'line-through'
                            }}
                          >
                            ₦{price.toLocaleString()}
                          </span>
                          {'     '}₦{discountPrice.toLocaleString()}
                        </React.Fragment>
                      ) : (
                        <span>₦{price.toLocaleString()}</span>
                      )}
                    </span>
                    <span className="stroke-amount">
                      {isRetainership(planData) ? '/month' : null}
                    </span>
                    <p className="billable-text">
                      {isRetainership(planData)
                        ? 'This amount is billed monthly'
                        : 'This amount is a one-time payment'}
                    </p>
                  </div>
                ) : null}

                {isRetainership(planData) ? (
                  price > 0 ? (
                    <LinkTo
                      className="single-package-link-button"
                      to={{
                        pathname: '/checkout/express',
                        state: { payload: mergeData(selectedPlan, planData) }
                      }}
                    >
                      Buy Now
                    </LinkTo>
                  ) : (
                    <ButtonCustom
                      text="Contact Us"
                      onClick={() => contactUsHandler(planData.title)}
                    />
                  )
                ) : price > 0 ? (
                  <ButtonCustom
                    text="Add to Cart"
                    onClick={() => addToCartHandler(selectedPlan, planData)}
                  />
                ) : (
                  <ButtonCustom
                    text="Contact Us"
                    onClick={() => contactUsHandler(planData.title)}
                  />
                )}

                {planData.productType.toLocaleLowerCase() === 'retainership' ||
                price < 1 ? null : (
                  <div>
                    <p className="billable-text">Call us for bulk purchases</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {planData.plans.length > 0 ? (
            <section className="plan-table-wrapper" id="plans">
              {planData.plans.map((plan, index) => (
                <PlanItem
                  item={plan}
                  key={index}
                  productType={planData.productType}
                />
              ))}
            </section>
          ) : null}

          <div className="product-you-like-wrapper">
            <h3 className="product-you-like-text">You might also like</h3>
            <div className="product-you-like-box-wrap">
              {relatedPlans.map((item, indexKey) => (
                <PackageItem
                  key={item._id || indexKey}
                  item={item}
                  packageLoading={reqStatus === 'FETCHING'}
                />
              ))}
            </div>

            <div className="show-more-wrapper hr-work-show-more">
              <button
                className="show-more-btn"
                onClick={() => history.push('/packages')}
              >
                <span>Show More</span>
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default SinglePackage;
