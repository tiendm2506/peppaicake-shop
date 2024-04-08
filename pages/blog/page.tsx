// import './blog.scss'

import Pagination from '@/components/common/pagination'

export default function Blog() {
  return (
    <main id='blog-page'>
      <section id='banner-page'>
        <img className='img-fluid' src='/images/bg-banner-page.jpg' alt='' />
        <h1>Our blog</h1>
      </section>
      <section id='blog'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-sm-7'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='post-item'>
                    <div className='thumb-post'>
                      <img className='img-fluid' src='/images/product-01.jpg' alt='' />
                      <div className='time'>Aug 18, 2021</div>
                    </div>
                    <h3>How to make cake: 9 steps (with pictures)</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis [...]
                    </p>
                    <a href='#' className='see-more-btn'>
                      Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
                    </a>
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
            <div className='col-lg-3 col-sm-5'>
              <div className='search'>
                <div className='wrapper'>
                  <input type='text' placeholder='Search...' />
                  <span className='btn-search'>
                    <i className='fa fa-search' aria-hidden='true' />
                  </span>
                </div>
              </div>
              <div className='categories-post'>
                <div className='title-post'>Categories</div>
                <ul>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span className='name'>Marble cake</span>
                      <span className='amount'>25</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='highlight-post'>
                <div className='title-post'>Highlight posts</div>
                <ul>
                  <li>
                    <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
                    <h3>Grandma’s strawberry shortcake</h3>
                    <p>Aug 18, 2021</p>
                    <a href='#' />
                  </li>
                  <li>
                    <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
                    <h3>Grandma’s strawberry shortcake</h3>
                    <p>Aug 18, 2021</p>
                    <a href='#' />
                  </li>
                  <li>
                    <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
                    <h3>Grandma’s strawberry shortcake</h3>
                    <p>Aug 18, 2021</p>
                    <a href='#' />
                  </li>
                </ul>
              </div>
              <div className='tags-post'>
                <div className='title-post'>Tags</div>
                <ul>
                  <li>
                    <a href='#'>Bread sticks</a>
                  </li>
                  <li>
                    <a href='#'>Rolls</a>
                  </li>
                  <li>
                    <a href='#'>Milk</a>
                  </li>
                  <li>
                    <a href='#'>Challar</a>
                  </li>
                  <li>
                    <a href='#'>swaill roll</a>
                  </li>
                  <li>
                    <a href='#'>Bread sticks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
