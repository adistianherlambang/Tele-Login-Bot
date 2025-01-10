import React from 'react';
import { useNavigate } from 'react-router-dom';

function IdPage() {
  const navigate = useNavigate();

  const navigateToUploadPage = (idType) => {
    navigate(`/${idType}`);
  };

  return (
    <div className="container-id-page">
      <div className="id-page-container">
        <div className="container-title">
          <div className="main-text">Select ID Type</div>
          <div className="second-text">Financial regulations require us to verify your identity.</div>
        </div>
        <div className="card-container">
          <div className="container container-id-card" onClick={() => navigateToUploadPage('identity=idcard')}>
            <svg className="icon-svg" width="68" height="42" viewBox="0 0 68 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_76_1038)">
                <path d="M64.5349 1.41535C65.2205 1.41535 65.8056 1.63512 66.1815 2.03338C66.5323 2.405 66.7004 2.93646 66.6673 3.57314C66.6342 4.2338 66.6382 4.88913 66.6421 5.52181C66.6435 5.79753 66.6448 6.08257 66.6435 6.35962V6.36495V6.37028C66.6488 9.53904 66.6541 12.7078 66.6607 15.8752C66.662 17.8892 66.6646 19.9031 66.6673 21.9184C66.6739 27.2023 66.6805 32.6674 66.6752 38.0419C66.6752 39.1075 65.9088 39.7961 64.7255 39.7988C61.1939 39.8041 57.6027 39.8054 54.1307 39.8081C52.3703 39.8081 50.6084 39.8094 48.8479 39.8108C41.295 39.8161 33.7408 39.8201 26.1879 39.8241C18.635 39.8281 11.0808 39.8334 3.5252 39.8374C1.95797 39.8374 1.34775 39.2234 1.34643 37.649C1.34113 30.6135 1.33584 23.5794 1.33187 16.5465C1.33187 16.4253 1.33848 16.2921 1.34378 16.1509C1.34775 16.0777 1.3504 16.0044 1.35304 15.9312V15.9059V15.8806L1.33716 6.3836C1.33584 6.09723 1.33319 5.81218 1.33187 5.52581C1.32657 4.82919 1.32128 4.10992 1.32525 3.40398C1.33319 2.18523 2.03342 1.48594 3.24988 1.48594C11.6896 1.47662 20.2724 1.47129 28.5705 1.46596C32.7838 1.4633 36.9984 1.46063 41.2116 1.45797C41.6789 1.45797 42.1475 1.45797 42.6147 1.45797C44.1952 1.45797 45.777 1.45797 47.3575 1.46063C48.9393 1.46063 50.5211 1.4633 52.1015 1.4633C55.7456 1.4633 60.0688 1.45797 64.5031 1.41801H64.5335M64.5349 0.083374C64.5216 0.083374 64.5071 0.083374 64.4938 0.083374C60.3639 0.120669 56.2341 0.128661 52.1042 0.128661C48.9419 0.128661 45.7797 0.123333 42.6174 0.123333C42.1488 0.123333 41.6815 0.123333 41.213 0.123333C28.5586 0.132657 15.9042 0.137985 3.24988 0.151305C1.29348 0.153969 0.0134821 1.44199 0.00156899 3.39466C-0.0050494 4.39363 0.00818738 5.39128 0.0134821 6.38893C0.0187768 9.55236 0.0240715 12.7158 0.0293662 15.8806C0.0214242 16.1017 0.00686371 16.3228 0.00686371 16.5439C0.0108347 23.578 0.0161295 30.6122 0.0214242 37.6476C0.0227478 39.9666 1.21935 41.1667 3.52388 41.1667H3.52785C18.635 41.1574 33.7408 41.1494 48.8479 41.1401C54.14 41.1361 59.4334 41.1361 64.7268 41.1281C66.6329 41.1254 67.9963 39.8614 67.9976 38.0406C68.0042 30.6508 67.9897 23.2623 67.983 15.8726C67.9764 12.7038 67.9711 9.53504 67.9658 6.36628C67.9711 5.45655 67.9433 4.54548 67.9883 3.63841C68.1008 1.44731 66.568 0.083374 64.5349 0.083374Z" fill="#008600"/>
                <path d="M22.7964 7.15347V25.9862C22.7964 26.242 22.4681 26.4497 22.0644 26.4497H5.81891C5.41519 26.4497 5.08691 26.242 5.08691 25.9862V7.15347C5.08691 6.89773 5.41519 6.68994 5.81891 6.68994H22.0644C22.4681 6.68994 22.7964 6.89773 22.7964 7.15347Z" fill="#008600"/>
                <path d="M61.3922 6.68994H27.5286V10.2277H61.3922V6.68994Z" fill="#008600"/>
                <path d="M61.3922 14.8003H27.5286V18.338H61.3922V14.8003Z" fill="#008600"/>
                <path d="M61.3922 22.912H27.5286V26.4497H61.3922V22.912Z" fill="#008600"/>
                <path d="M61.3909 31.0237H5.08691V34.5614H61.3909V31.0237Z" fill="#008600"/>
                </g>
                <defs>
                <clipPath id="clip0_76_1038">
                <rect width="68" height="41.0833" fill="white" transform="translate(0 0.083374)"/>
                </clipPath>
                </defs>
            </svg>

            <div className="card-text-1">National ID Card</div>
            <div className="id-page-text-card-2">Please select your National ID card as a form of identification.</div>
          </div>
          <div className="container container-license" onClick={() => navigateToUploadPage('identity=driverlicense')}>
            <svg className='icon-svg' width="68" height="41" viewBox="0 0 68 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_76_1075)">
                <path d="M64.5346 1.3278C65.2203 1.3278 65.8053 1.54688 66.1813 1.94389C66.532 2.31435 66.7001 2.84414 66.6671 3.47883C66.634 4.13741 66.6379 4.79069 66.6419 5.42139C66.6432 5.69625 66.6446 5.98039 66.6432 6.25658V6.26189V6.2672C66.6485 9.42603 66.6538 12.5849 66.6604 15.7424C66.6618 17.7473 66.6644 19.7523 66.6671 21.7573C66.6737 27.0273 66.6803 32.4779 66.675 37.8382C66.675 38.9004 65.9086 39.5869 64.7252 39.5896C61.1976 39.5949 57.6105 39.5962 54.1411 39.5989C52.3766 39.5989 50.6122 39.6002 48.8477 39.6015C41.2948 39.6068 33.7406 39.6108 26.1877 39.6148C18.6347 39.6188 11.0805 39.6241 3.52496 39.6281C1.95772 39.6281 1.34751 39.016 1.34618 37.4465V37.0588C1.34089 30.1742 1.33559 23.2922 1.33162 16.4102C1.33162 16.2894 1.33824 16.1566 1.34353 16.0159C1.34751 15.9428 1.35015 15.8698 1.3528 15.7968V15.7716V15.7463L1.33692 6.27915C1.33559 5.99367 1.33295 5.7082 1.33162 5.42405C1.32633 4.72961 1.32103 4.0126 1.325 3.3102C1.33295 2.09526 2.03317 1.39817 3.24963 1.39817C11.6854 1.38887 20.2629 1.38356 28.5584 1.37825C32.7769 1.3756 36.9942 1.37294 41.2127 1.37029C41.6813 1.37029 42.1512 1.37029 42.6211 1.37029C44.2016 1.37029 45.7807 1.37029 47.3612 1.37294C48.9417 1.37294 50.5222 1.3756 52.1026 1.3756C55.748 1.3756 60.0712 1.37029 64.5042 1.33045H64.5346M64.5346 0C64.5214 0 64.5068 0 64.4936 0C60.3637 0.0371783 56.2338 0.0451451 52.104 0.0451451C48.943 0.0451451 45.7821 0.0398339 42.6211 0.0398339C42.1512 0.0398339 41.6826 0.0398339 41.2127 0.0398339C28.5584 0.0491285 15.904 0.0544396 3.24963 0.0677176C1.29323 0.0703732 0.013238 1.35435 0.00132485 3.3009C-0.00529354 4.29675 0.00794324 5.29127 0.013238 6.28579C0.0185327 9.4393 0.0238274 12.5928 0.0291221 15.7477C0.02118 15.9681 0.00661957 16.1885 0.00661957 16.4089C0.0105906 23.421 0.0158853 30.4331 0.02118 37.4465C0.0225037 39.7582 1.21911 40.9545 3.52363 40.9545H3.5276C18.6347 40.9453 33.7406 40.9373 48.8477 40.928C54.1398 40.924 59.4332 40.924 64.7265 40.916C66.6326 40.9134 67.996 39.6533 67.9974 37.8382C68.004 30.4716 67.9894 23.1063 67.9828 15.7397C67.9762 12.5809 67.9709 9.42204 67.9656 6.26321C67.9709 5.35633 67.9431 4.44812 67.9881 3.54389C68.1006 1.35966 66.5678 0 64.5346 0Z" fill="#006A00"/>
                <path d="M4.47271 0H63.9893C66.1892 0 67.9749 1.7912 67.9749 3.99799V11.0207H0V4.48529C0 2.01028 2.00405 0 4.47271 0Z" fill="#006A00"/>
                <path d="M23.5574 16.0053V34.779C23.5574 35.0339 23.2291 35.2411 22.8254 35.2411H6.57989C6.17617 35.2411 5.8479 35.0339 5.8479 34.779V16.0053C5.8479 15.7503 6.17617 15.5432 6.57989 15.5432H22.8254C23.2291 15.5432 23.5574 15.7503 23.5574 16.0053Z" fill="#006A00"/>
                <path d="M62.152 15.5432H28.2883V19.0698H62.152V15.5432Z" fill="#006A00"/>
                <path d="M62.152 23.6295H28.2883V27.1561H62.152V23.6295Z" fill="#006A00"/>
                <path d="M62.152 31.7158H28.2883V35.2424H62.152V31.7158Z" fill="#006A00"/>
                </g>
                <defs>
                <clipPath id="clip0_76_1075">
                <rect width="68" height="40.9545" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className="card-text-1">Driver’s License</div>
            <div className="id-page-text-card-2">Please select your driver’s license as a form of identification.</div>
          </div>
        </div>
        <div className="note">
          By selecting your ID type above, you agree that we (and our service provider) can collect, use, and store your biometric information for identity verification. Learn more in our <span>Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
}

export default IdPage;
