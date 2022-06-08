/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Grid, Grid1, Grid2, Hamburger, Logo } from "./styles";
import logoImg from "../../assets/Logo.png";
import { ButtomWhatsApp } from "../buttons/style";


export function NavBar({ setMenuIsVisible }) {
  return (
    <Container>
      <Grid>
        <Hamburger>
          <svg
            onClick={() => setMenuIsVisible(true)}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 8H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 24H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Hamburger>
        <Logo>
        <img src={logoImg} alt="Logo" />
        </Logo>

        <Grid1>
          <section>
            <nav>
              <ul>
                <li>
                  <a href="home">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.3126 13.7L17.6987 4.61249C17.503 4.44384 17.2474 4.35031 16.9822 4.35031C16.717 4.35031 16.4614 4.44384 16.2658 4.61249L5.6519 13.7C5.54509 13.795 5.45955 13.9092 5.40031 14.0359C5.34107 14.1626 5.30932 14.2991 5.30695 14.4375V26C5.30695 26.2652 5.41877 26.5196 5.61782 26.7071C5.81687 26.8946 6.08684 27 6.36833 27H27.5961C27.8776 27 28.1476 26.8946 28.3466 26.7071C28.5457 26.5196 28.6575 26.2652 28.6575 26V14.4375C28.6551 14.2991 28.6234 14.1626 28.5641 14.0359C28.5049 13.9092 28.4194 13.795 28.3126 13.7V13.7Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>HOME</p>
                  </a>
                </li>
                <li>
                  <a href="sobre">
                    <svg width="35" height="32" viewBox="0 0 35 32">
                      <path
                        d="M17.0193 22.5C19.9567 22.5 22.3379 20.2614 22.3379 17.5C22.3379 14.7386 19.9567 12.5 17.0193 12.5C14.082 12.5 11.7008 14.7386 11.7008 17.5C11.7008 20.2614 14.082 22.5 17.0193 22.5Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.0608 14.5C27.2997 14.4981 28.5219 14.7683 29.63 15.2892C30.7381 15.81 31.7014 16.5671 32.443 17.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.59558 17.5C2.33725 16.5671 3.30054 15.81 4.40862 15.2892C5.51671 14.7683 6.73893 14.4981 7.97781 14.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.36063 27C10.0611 25.6514 11.1504 24.5148 12.5045 23.7198C13.8585 22.9247 15.4229 22.5032 17.0193 22.5032C18.6157 22.5032 20.1801 22.9247 21.5341 23.7198C22.8882 24.5148 23.9775 25.6514 24.678 27"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.97778 14.5C7.17021 14.5008 6.37909 14.2855 5.69685 13.8792C5.01461 13.473 4.46943 12.8927 4.12501 12.206C3.78059 11.5193 3.65115 10.7546 3.75182 10.0014C3.85249 9.24809 4.17911 8.5373 4.69352 7.95206C5.20793 7.36681 5.88887 6.93127 6.6568 6.69634C7.42473 6.4614 8.24791 6.43677 9.03018 6.62532C9.81244 6.81388 10.5215 7.20782 11.0744 7.76113C11.6274 8.31444 12.0014 9.00427 12.1528 9.75"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.8857 9.75C22.0372 9.00427 22.4112 8.31444 22.9642 7.76113C23.5171 7.20782 24.2261 6.81388 25.0084 6.62532C25.7907 6.43677 26.6139 6.4614 27.3818 6.69634C28.1497 6.93127 28.8307 7.36681 29.3451 7.95206C29.8595 8.5373 30.1861 9.24809 30.2868 10.0014C30.3874 10.7546 30.258 11.5193 29.9136 12.206C29.5692 12.8927 29.024 13.473 28.3417 13.8792C27.6595 14.2855 26.8684 14.5008 26.0608 14.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>SOBRE</p>
                  </a>
                </li>
                <li>
                  <a href="servicos">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3626 8.87498C28.0185 10.4066 28.1791 12.105 27.8218 13.7324C27.4645 15.3598 26.6073 16.8347 25.37 17.9507C24.1328 19.0667 22.5776 19.7678 20.9221 19.956C19.2666 20.1441 17.5937 19.8099 16.1376 19V19L9.12508 27.125C8.56149 27.6886 7.79711 28.0052 7.00008 28.0052C6.20305 28.0052 5.43866 27.6886 4.87508 27.125C4.31149 26.5614 3.99487 25.797 3.99487 25C3.99487 24.203 4.31149 23.4386 4.87508 22.875L13.0001 15.8625C12.1902 14.4064 11.8559 12.7335 12.0441 11.078C12.2322 9.42247 12.9334 7.86723 14.0493 6.63001C15.1653 5.3928 16.6402 4.53553 18.2677 4.17824C19.8951 3.82095 21.5935 3.98153 23.1251 4.63748L17.8751 9.87498L18.5876 13.4125L22.1251 14.125L27.3626 8.87498Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <p>SERVIÇOS</p>
                  </a>
                  <span>
                    <ul></ul>
                  </span>
                </li>




                <li>
                  <a href="contato">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9012 4.48749L3.17088 11.05C2.96036 11.1042 2.7727 11.2183 2.63347 11.3766C2.49423 11.5349 2.41019 11.7299 2.39279 11.9348C2.37538 12.1398 2.42546 12.3448 2.53621 12.522C2.64696 12.6992 2.81298 12.8399 3.01167 12.925L14.3685 17.9875C14.591 18.0846 14.7697 18.2529 14.8727 18.4625L20.246 29.1625C20.3363 29.3497 20.4856 29.5061 20.6737 29.6105C20.8617 29.7148 21.0793 29.762 21.2969 29.7456C21.5144 29.7292 21.7213 29.65 21.8894 29.5188C22.0575 29.3876 22.1785 29.2108 22.2361 29.0125L29.2014 5.71249C29.2542 5.54246 29.2575 5.36219 29.2109 5.19056C29.1643 5.01894 29.0695 4.86228 28.9366 4.73702C28.8036 4.61175 28.6374 4.52249 28.4552 4.47859C28.273 4.43469 28.0817 4.43776 27.9012 4.48749V4.48749Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7134 18.1375L20.7103 12.4875"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>CONTATO</p>
                  </a>
                </li>
                <li>

                </li>
              </ul>
            </nav>
          </section>
        </Grid1>

        <Grid2>
          <ButtomWhatsApp>
          <svg  viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.61072 17.9766C3.401 15.9356 2.97785 13.5232 3.42072 11.1924C3.86359 8.86149 5.14202 6.77243 7.01601 5.31735C8.88999 3.86227 11.2307 3.14125 13.5986 3.28965C15.9665 3.43805 18.1988 4.44566 19.8765 6.12331C21.5541 7.80097 22.5618 10.0333 22.7102 12.4012C22.8585 14.7691 22.1375 17.1098 20.6825 18.9838C19.2274 20.8578 17.1383 22.1362 14.8074 22.5791C12.4766 23.022 10.0642 22.5988 8.02322 21.3891V21.3891L4.65135 22.3438C4.5132 22.3842 4.36673 22.3867 4.22728 22.351C4.08784 22.3153 3.96055 22.2428 3.85878 22.141C3.757 22.0392 3.68447 21.912 3.6488 21.7725C3.61313 21.6331 3.61563 21.4866 3.65604 21.3485L4.61072 17.9766Z" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4477 18.6875C14.3786 18.6902 13.3195 18.4816 12.3313 18.0737C11.3431 17.6658 10.4452 17.0667 9.68928 16.3107C8.93333 15.5548 8.3342 14.6569 7.92632 13.6687C7.51844 12.6805 7.30985 11.6214 7.31253 10.5523C7.31521 9.79989 7.61601 9.07917 8.14902 8.54806C8.68204 8.01695 9.40382 7.71874 10.1563 7.71874V7.71874C10.2804 7.71775 10.4025 7.75024 10.5098 7.8128C10.617 7.87535 10.7054 7.96566 10.7657 8.07421L11.9539 10.1461C12.0246 10.272 12.0609 10.4144 12.0591 10.5588C12.0573 10.7032 12.0175 10.8446 11.9438 10.9687L10.9891 12.5633C11.4781 13.6511 12.3489 14.5219 13.4367 15.0109L15.0313 14.0562C15.1554 13.9825 15.2968 13.9427 15.4412 13.9409C15.5857 13.9392 15.728 13.9754 15.8539 14.0461L17.9258 15.2344C18.0344 15.2946 18.1247 15.383 18.1872 15.4902C18.2498 15.5975 18.2823 15.7196 18.2813 15.8437C18.2786 16.5954 17.9795 17.3156 17.449 17.8481C16.9185 18.3805 16.1993 18.6821 15.4477 18.6875V18.6875Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <a
              title="Enviar mensagem para o WhatsApp"
              href="https://contate.me/potencialestruturas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>ATENDIMENTO</p>
            </a>
          </ButtomWhatsApp>
        </Grid2>
      </Grid>
    </Container>
  );
}