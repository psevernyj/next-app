import React from 'react';

const Contacts = () => {
  return (
    <div className={'contactsSection section'}>
      <h2 className={'contactsTitle container'}>
        Have any questions? <br />
        We have the answers. Feel free to contact us.
      </h2>
      <div className={'content container'}>
        <div className={'contact'}>
          <a className={'link'} href={'mailto:info@uds.systems'}>
            <div className={'thumbnail'}>
              <svg
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.6816 0.535156H2.95508C1.50312 0.535156 0.318359 1.71608 0.318359 3.16593V20.7044C0.318359 22.1496 1.49785 23.3352 2.95508 23.3352H27.6816C29.1301 23.3352 30.3184 22.1583 30.3184 20.7044V3.16593C30.3184 1.72076 29.1389 0.535156 27.6816 0.535156ZM27.3178 2.289L15.374 14.2052L3.32773 2.289H27.3178ZM2.07617 20.3413V3.52079L10.5418 11.8948L2.07617 20.3413ZM3.31895 21.5813L11.7898 13.1295L14.7582 16.0655C15.1016 16.4051 15.6564 16.4045 15.9986 16.0625L18.8926 13.1751L27.3178 21.5813H3.31895ZM28.5605 20.3413L20.1354 11.9352L28.5605 3.52897V20.3413Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a
            className={'link'}
            href={'mailto:info@uds.systems'}
            aria-label={'Contact us!'}
            title={'mail'}
          >
            info@uds.systems
          </a>
        </div>
        <div className={'contact'}>
          <a className={'link'} href="skype:live:uds_ddt?chat">
            <div className={'thumbnail'}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7676 29.7504C18.7561 29.7504 15.6398 28.9197 12.6723 28.4064C10.0115 27.946 7.47597 26.6858 5.42947 24.6392C3.38379 22.5932 2.12316 20.0578 1.66262 17.3964C1.14913 14.4289 0.318359 11.3127 0.318359 8.30114C0.318359 3.93731 3.86895 0.386719 8.23278 0.386719C11.2443 0.386719 14.3621 1.2112 17.3293 1.72628C22.917 2.69627 27.3753 7.14315 28.3443 12.7404C28.8579 15.7074 29.682 18.8248 29.682 21.8359C29.682 26.1998 26.1314 29.7504 21.7676 29.7504ZM18.3191 26.2737C19.313 27.0474 20.5053 27.4563 21.7676 27.4563C24.8668 27.4563 27.388 24.9352 27.388 21.8359C27.388 20.5736 26.979 19.3813 26.2054 18.3874C25.9972 18.1196 25.9175 17.7738 25.9892 17.4423C27.7086 9.43668 20.5764 2.37163 12.6264 4.07954C12.2949 4.15066 11.9485 4.07151 11.6813 3.86333C10.6874 3.08966 9.49507 2.68075 8.23278 2.68075C5.13354 2.68075 2.61239 5.2019 2.61239 8.30114C2.61239 9.56343 3.0213 10.7558 3.79497 11.7496C4.00315 12.0175 4.08287 12.3633 4.01118 12.6948C2.29524 20.6826 9.40503 27.7689 17.3739 26.0575C17.7037 25.987 18.0501 26.0644 18.3191 26.2737ZM20.659 18.4522C20.659 15.3547 16.7431 14.4079 15.8667 14.1389C14.051 13.582 11.6354 12.9603 11.6354 11.6848C11.6354 10.4724 13.1764 9.44815 15.0002 9.44815C16.4512 9.44815 17.7742 10.1054 18.2176 11.0459C18.4877 11.6189 19.1713 11.8643 19.7442 11.5942C20.3172 11.3241 20.5626 10.6405 20.2925 10.0675C19.3898 8.15317 17.1457 7.15412 15.0002 7.15412C11.6624 7.15412 9.34137 9.32428 9.34137 11.6848C9.34137 14.7824 13.2573 15.7292 14.1336 15.9982C15.9493 16.5551 18.365 17.1768 18.365 18.4522C18.365 19.6646 16.8239 20.6889 15.0002 20.6889C13.5492 20.6889 12.2261 20.0317 11.7828 19.0911C11.5127 18.5182 10.8291 18.2727 10.2561 18.5429C9.68318 18.813 9.43772 19.4966 9.70784 20.0695C10.6105 21.9839 12.8547 22.983 15.0002 22.983C18.338 22.983 20.659 20.8128 20.659 18.4522Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a
            className={'link'}
            href="skype:live:uds_ddt?chat"
            aria-label={'Contact us!'}
            title={'skype'}
          >
            uds.systems
          </a>
        </div>
      </div>
      <button className={'button orangeButton bigButton'}>
        Book a call
        <svg
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0449 2.87746L16.8292 2.49639C15.4516 2.06453 13.9797 2.76245 13.3898 4.12726L12.4506 6.30013C11.9477 7.46345 12.2127 8.83062 13.1096 9.70048L14.6662 11.2101C14.7117 11.2542 14.7405 11.3138 14.7474 11.3781C14.7936 11.8083 14.5132 12.6462 13.867 13.81C13.3972 14.6564 12.9719 15.2499 12.61 15.5837C12.3578 15.8163 12.219 15.8666 12.1599 15.8483L10.0658 15.1825C8.89328 14.8096 7.62265 15.2542 6.90524 16.2883L5.57115 18.2112C4.73145 19.4215 4.88245 21.0912 5.92441 22.1174L6.8477 23.0268C7.84398 24.0081 9.26225 24.3737 10.5839 23.9901C13.4527 23.1573 16.0249 20.6395 18.329 16.4891C20.6362 12.333 21.4458 8.75323 20.6995 5.75045C20.3579 4.37626 19.3515 3.28709 18.0449 2.87746ZM17.5939 4.43332C18.3779 4.6791 18.9818 5.3326 19.1867 6.15711C19.8144 8.68292 19.0969 11.8558 16.9758 15.6766C14.8575 19.4923 12.5774 21.7243 10.1638 22.4249C9.37083 22.6551 8.51987 22.4357 7.9221 21.8469L6.99882 20.9376C6.5252 20.4711 6.45656 19.7121 6.83824 19.162L8.17234 17.2391C8.49843 16.7691 9.07599 16.567 9.60894 16.7365L11.7083 17.4039C12.9267 17.7817 14.0326 16.7618 15.2202 14.6225C16.0205 13.1809 16.3935 12.0665 16.3002 11.1977C16.2519 10.7476 16.0503 10.3304 15.7318 10.0216L14.1753 8.51203C13.7676 8.11664 13.6471 7.49519 13.8757 6.96641L14.8149 4.79355C15.0831 4.17318 15.7521 3.85594 16.3783 4.05224L17.5939 4.43332Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Contacts;
