export default function ProductDetail() {
  return (
    <main id='product-details-page'>
      <section id='banner-page'>
        <img className='img-fluid' src='/images/bg-banner-page.jpg' alt='' />
        <h1>Product details</h1>
      </section>
      <section id='product-general'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='img-product'>
                <div className='img'>
                  <img className='img-fluid w-100' src='/images/product-01.jpg' alt='' />
                </div>
                <div className='gallery'>
                  <img className='img-fluid active' src='/images/product-01.jpg' alt='' />
                  <img className='img-fluid' src='/images/img-cake-about.jpg' alt='' />
                  <img className='img-fluid' src='/images/img-about-2.jpg' alt='' />
                  <img className='img-fluid' src='/images/img-cake-about.jpg' alt='' />
                  <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='info-product'>
                <h3>Lemon ginger bundt cake</h3>
                <div className='price'>$7.00</div>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>
                    <span>Origin: </span>America
                  </li>
                  <li>
                    <span>Status: </span>In stock
                  </li>
                  <li>
                    <span>Product code: </span>#a123456
                  </li>
                  <li>
                    <span>Brand: </span>Cookies
                  </li>
                </ul>
                <div className='wrapper'>
                  <div className='quantity'>
                    <div className='down-amount'>-</div>
                    <div className='amount'>1</div>
                    <div className='up-amount'>+</div>
                  </div>
                  <button className='add-to-cart-btn'>
                    <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='related-product'>
        <div className='container'>
          <h2 className='text-left'>Related product</h2>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='wrapper-product'>
                <div className='img'>
                  <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='info'>
                    <div className='name'>Bread stick</div>
                    <div className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </div>
                    <div className='price'>$ 7.00</div>
                  </div>
                  <button className='add-to-cart-btn'>
                    <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
                    Thêm vào giỏ
                  </button>
                </div>
                <a href='#' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='wrapper-product'>
                <div className='img'>
                  <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='info'>
                    <div className='name'>Bread stick</div>
                    <div className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </div>
                    <div className='price'>$ 7.00</div>
                  </div>
                  <button className='add-to-cart-btn'>
                    <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
                    Thêm vào giỏ
                  </button>
                </div>
                <a href='#' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='wrapper-product'>
                <div className='img'>
                  <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='info'>
                    <div className='name'>Bread stick</div>
                    <div className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </div>
                    <div className='price'>$ 7.00</div>
                  </div>
                  <button className='add-to-cart-btn'>
                    <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
                    Thêm vào giỏ
                  </button>
                </div>
                <a href='#' />
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='wrapper-product'>
                <div className='img'>
                  <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                </div>
                <div className='content'>
                  <div className='info'>
                    <div className='name'>Bread stick</div>
                    <div className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </div>
                    <div className='price'>$ 7.00</div>
                  </div>
                  <button className='add-to-cart-btn'>
                    <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
                    Thêm vào giỏ
                  </button>
                </div>
                <a href='#' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
