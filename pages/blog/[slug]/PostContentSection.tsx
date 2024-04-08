import SidebarBlog from '../sidebar-blog'
import TagPost from './TagPost'

import styles from './blog-detail.module.scss'

export default function PostContentSection() {
  return (
    <section id={styles.post}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 col-sm-7'>
            <img className='w-100 img-fluid' src='/images/product-01.jpg' alt='' />
            <h1>65 Best homemade cake recipes - how to make an easy cake</h1>
            <div className={styles.info_post}>
              <ul>
                <li>
                  <i className='fa fa-clock-o' aria-hidden='true' />
                  <span>Aug 18, 2021</span>
                </li>
                <li>
                  <i className='fa fa-comment-o' aria-hidden='true' />
                  <span>Comment: 2</span>
                </li>
              </ul>
            </div>
            <h3>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </h3>
            <p>
              Odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit sed quia non numquam eius modi.
            </p>
            <div className={styles.img}>
              <img className='w-100 img-fluid' src='/images/product-01.jpg' alt='' />
              <h6>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam.
              </h6>
            </div>
            <h3>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </h3>
            <p>
              Odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit sed quia non numquam eius modi.
            </p>
            <div className={styles.img}>
              <img className='w-100 img-fluid' src='/images/product-01.jpg' alt='' />
              <h6>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam.
              </h6>
            </div>
            <h3>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </h3>
            <p>
              Odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, consectetur, adipisci velit sed quia non numquam eius modi.
            </p>
            <div className={styles.img}>
              <img className='w-100 img-fluid' src='/images/product-01.jpg' alt='' />
              <h6>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam.
              </h6>
            </div>
          </div>
          <div className='col-lg-3 col-sm-5 d-none d-sm-block'>
            <SidebarBlog />
          </div>
        </div>
        <TagPost />
      </div>
    </section>
  )
}
