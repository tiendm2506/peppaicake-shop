import './footer.scss'

export function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='content home-col'>
              <a href='/'>
                <img src='../images/logo-white.svg' alt='' />
              </a>
              <p>
                ThemeMu comes with powerful theme options, which empowers you to quickly and easily
                build incredible store.
              </p>
              <ul>
                <li>
                  <a href='#' target='_blank'>
                    <span>
                      <i className='fa fa-facebook' aria-hidden='true' />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank'>
                    <span>
                      <i className='fa fa-google-plus' aria-hidden='true' />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank'>
                    <span>
                      <i className='fa fa-twitter' aria-hidden='true' />
                    </span>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank'>
                    <span>
                      <i className='fa fa-youtube' aria-hidden='true' />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='content contact'>
              <h3>Liên hệ</h3>
              <ul>
                <li>
                  <i className='fa fa-map-marker' aria-hidden='true' />
                  <span>Địa chỉ:</span> 13 Cô Giang, Phường 1, Phú Nhuận, TP.HCM
                </li>
                <li>
                  <i className='fa fa-phone' aria-hidden='true' />
                  <span>Điện thoại:</span> 0909.111.223
                </li>
                <li>
                  <i className='fa fa-envelope-o' aria-hidden='true' />
                  <span>Email:</span> contact@peppaicake.com
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='content recent-post'>
              <h3>Bài đăng gần đây</h3>
              <ul>
                <li>
                  <img className='img-fluid' src='../images/cake-post.jpg' alt='' />
                  <h4>Etiam accumsan consequat libero et tincidunt</h4>
                  <h6>Aug 18, 2021</h6>
                  <a href='#' />
                </li>
                <li>
                  <img className='img-fluid' src='../images/cake-post.jpg' alt='' />
                  <h4>Etiam accumsan consequat libero et tincidunt</h4>
                  <h6>Aug 18, 2021</h6>
                  <a href='#' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright © 2021 Peppai Cake - Designed by Henry</p>
      </div>
    </footer>
  )
}
