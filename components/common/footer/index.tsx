import Link from 'next/link'

import { ROUTES } from './../../../constants'

import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer id={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className={`${styles.content} ${styles.homeCol}`}>
              <Link href={ROUTES.HOME_PAGE}>
                <img src='/images/logo-white.svg' alt='' />
              </Link>
              <p>
                ThemeMu comes with powerful theme options, which empowers you to quickly and easily
                build incredible store.
              </p>
              <ul>
                <li>
                  <Link href='#'>
                    <span>
                      <i className='fa fa-facebook' aria-hidden='true' />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <span>
                      <i className='fa fa-google-plus' aria-hidden='true' />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <span>
                      <i className='fa fa-twitter' aria-hidden='true' />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <span>
                      <i className='fa fa-youtube' aria-hidden='true' />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className={`${styles.content} ${styles.contact}`}>
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
            <div className={`${styles.content} ${styles.recentPost}`}>
              <h3>Bài đăng gần đây</h3>
              <ul>
                <li>
                  <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
                  <h4>Etiam accumsan consequat libero et tincidunt</h4>
                  <h6>Aug 18, 2021</h6>
                  <Link href='#'></Link>
                </li>
                <li>
                  <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
                  <h4>Etiam accumsan consequat libero et tincidunt</h4>
                  <h6>Aug 18, 2021</h6>
                  <Link href='#'></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2021 Peppai Cake - Designed by Henry</p>
      </div>
    </footer>
  )
}
