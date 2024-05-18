/* eslint-disable */
import React from "react";
import { CustomBtn } from "../components/connectButton";
import { useAccount } from "wagmi";


const Site = () => {

  return (
    <>
      <div className="bg_header">
        <div className="container">
          <div className="scrolling-wrapper">
            <div className="scrolling-content">
            <img src="/Assets/literally-dog-4.svg" alt="" />
              <img src="/Assets/literally-dog-4.svg" alt="" />
              <img src="/Assets/literally-dog-4.svg"alt="" />
            </div>
          </div>

          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div className="d-flex hea  d-lg-none align-items-center w-100" style={{display : "flex", flexDirection : "row", justifyContent : "space-between"}}>
                <div className="me-lg-0 me-5">
                  <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa-solid fa-bars mf mt-1" />
                    </span>
                  </button>
                </div>

                <CustomBtn>Connect Wallet</CustomBtn>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      DOG WIF HAT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      BUY WIF US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CHART WIF US
                    </a>
                  </li>
                  <div className="dropdown">
                    <button
                      className="drop_she dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      VIBE WIF US
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://t.me/dogwifcoin"
                        >
                          {" "}
                          <i className="fa-brands fa-telegram me-1" />
                          telegram
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://twitter.com/dogwifcoin"
                        >
                          {" "}
                          <i className="fa-brands fa-twitter me-1" />
                          twitter
                        </a>
                      </li>
                      {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                  </div>
                </ul>
                <nav>
                  <CustomBtn>
                    Connect Wallet
                    </CustomBtn>
                  {/* <div></div> */}
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>

   {/* what is wif section  */}
      <div className="what_is_wif_main">
        <div className="container ">
          <h1 className="wh_head">WHAT IS <span className="wiff">$WIF</span> ?</h1>
          <p className="wif_para mt-4">WIF T <span className="bg_text"> LITERALLY JUST A DOG WIF A HAT</span> ; IT&rsquo;S A
            SYMBOL OF PROGRESS, FOR FUTURISTIC TRANSACTIONS, A BEACON FOR THOSE WHO THINK AHEAD. IT&rsquo;S CLEAR THAT THE
            FUTURE BELONGS TO THOSE WHO EMBRACE INNOVATIONS LIKE WIF, TRANSCENDING BOUNDARIES &amp; PAVING A NEW ERA IN
            FINANCE AND TECHNOLOGY.</p>
          <div className="listen_part tokne_dists">
            <div className="container">
              <h1 className="gat_gen sm_fs">
                $WIF Token distribution
              </h1>
              <p className="wifff_para">The $WIF Token Distribution has now started. We will distribute a total of
                $10,000,000
                $WIF</p>
              <div className="d-flex justify-content-center claim-container">
              <CustomBtn>CLAIM</CustomBtn>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-md-4">
              <img src="/Assets/wif_hat.webp" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>

        <div className="befrfr">
          <div className="container">
            <h1 className="befr_head">BE FR FR I&rsquo;M SO SERIOUS</h1>
            <div className="row justify-content-center my-5">
              <div className="col-md-6">
                <video className="w-100" controls autoPlay loop muted>
                  <source src="/Assets/wif2.mp4" type="video/mp4" />
                  {/* <source src="movie.ogg" type="video/ogg"> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
         {/* listen part  */}
      <div className="listen_part">
        <div className="container">
          <h1 className="gat_gen">LISTEN</h1>
          <div className="bras" />
          <div className="d-flex justify-content-center my-5">
            <audio controls>
              <source src="/Assets/listen.mp3" type="audio/mpeg" />
              {/* Your browser does not support the audio element. */}
            </audio>
          </div>
        </div>
      </div>

       {/* get wif the best  */}
       <div className="wifthe_best">
        <div className="container">
          <h1 className="befr_head">GET WIF THE BEST</h1>
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-md-4">
                <div className="dox_box brd_clr">
                  <div className="d-flex justify-content-center">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  id="svg1"
  width="433.33334"
  height="433.33334"
  viewBox="0 0 433.33334 433.33334"
  className="dog_img"
>
  <defs id="defs1" />
  <g id="g1">
    <image
      className="preserveAspectRatio"
      xlinkHref="votre_data_image_base64_ici"
      width="433.33334"
      height="433.33334"
      preserveAspectRatio="none" href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQAB
                              AAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAA
                              AABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDAB
                              oAMAAQAAAP//AAACoAQAAQAAAEUBAAADoAQAAQAAAEUBAAAAAAAA/9sAQwADAgICAgIDAgICAwMD
                              AwQGBAQEBAQIBgYFBgkICgoJCAkJCgwPDAoLDgsJCQ0RDQ4PEBAREAoMEhMSEBMPEBAQ/9sAQwED
                              AwMEAwQIBAQIEAsJCxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ
                              EBAQEBAQ/8AAEQgBRQFFAwERAAIRAQMRAf/EAB0AAAEFAQEBAQAAAAAAAAAAAAYCAwQFBwEACAn/
                              xABWEAABAwMCAwQGBAkIBgcIAwACAQMEAAURBhITITEHIjJBFEJRYXGBI1KRoRUzYnKCorHB8AgW
                              Q5KywtHhJFNjo+LjJURUZMPS8Rc0NVVzg5PTZXSE/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAIDAQQF
                              Bv/EACYRAQEAAwACAwEBAAIDAQEAAAABAgMREiEEEzFBUQVhFCIyQhX/2gAMAwEAAhEDEQA/ANbr
                              z1SKA6NIUvb76DGkRz+kz7udBzxL7vvoBnb76DvbffQHioBNAeA855UCzhszzjlQaThvjEPh5UM6
                              bV4186G4k8R5cbOea38Ux9p0O2S5mFFOvWp5bpP1SaJkuoOkLgYqZsOL7O7/AJ1LLfr/AK6Z8K/1
                              f2/s2ucvCKyQfnD/AJ0n/kYT8PPgpz/ZPcWG96K2v8fGs/8AMn8Ux+CGLvpWfbtzbrG0frZq2m/1
                              Hd8LkDrrBNbkIVyNWcfOGsfk0dS+2uUKvKhp6n303gHBpQV3frUAoS91Ad3e6gFcP30J8e4fvoHC
                              9xequKGu7ffQCxDr3l+VAKRkUoBQoCdeVAdI2xTkmaGe3N5FQ0oOec4WhlO0Fd7vrFj5UNPbvdQZ
                              XU7kIoDhFt8qRsnXOM57aDOE6ZJhVoDxIq+sqUHK3e6gPbvdQDbnlQ2FUMNUGIoBsqCk7ueK1snV
                              7piwld57QECkG72dfd99c+/f4u74+nrcLLpi02aMANsiTiJzynJK8Ld8vt5HvaNE/r029NMuqzHj
                              iaj4sD0rm7b7j0Jqhxm9SZQ8CMiqvmSLkaXyzH0xXXu63iBHXgAj5r6uKb7Mo7NOicVMK2XXUtvc
                              V9okPOEQ/L4V16d/P1x/N0wP3vs6ukVknmmN23qiV6Or5X8fP7fiAt23uMLteQgJfJUrs8nL9EcC
                              0yHy+hFST3JTecR+inTsctsclGNK37oz6L/iEUGQmO5W9g+ukcJfbTcpSmyxnlRwpOQ+sv2Vgc4g
                              e2lYdR3PqL8udDOPcP30xnuJ7qAXQHEAl9daAVwxTpn7aA622gluRaAeHu0AtEzQCqAXtFPEePlQ
                              De4fWXFARN3uocL273UA255UGjyptTrQtrKGgt/XaAac8qGwkAznnQ23jlAeoBsqGVwS91DJeEkW
                              aD43rjbe50UzQfGdaf2ZwHgM30TvNpy/j5V5PzbzvHv/AAdHYOrnquxWOE4cyc0nD6868azr28dN
                              jPonbXp+4XJIsExIXSQUcxyppFpivL1rpiIDdusjAPSnVwqD0RaaHx1++quTfdYps9H08bbjq7Ud
                              dLCp+jjnSc6rJwYW1Lq2w2kq4gT6eMR7qY9b91TytiW7GZLOXeLQ0263JfF0tq7kRfsrdW724b8e
                              5A24WywahmcO3PGLiLvcVU2pjy/fXZPkWFvwupbp2bScFZSNNSXQ8fL7KXd8yyL6fg/6qLf2n6U1
                              C4UCZFGMqLhNyInP41PR8yq7fgzixl6QtlwbWRAlNYLmnPrXfPmV5e/4AJuOkLkzLNtuPuRPNFr0
                              8flyvF3/AArPxTy7bJhr9KConRFquO6ZOPxs9IIoKZzim/QSSivVcUg8HRdD20DweEdvnmnHgXtS
                              geBbXnQlS0XNMYrb76UvCuZdVpjHEDPnQYsHBbHaVAeRc0FdF1sfYvxSgO8dv3fJKDIFDz3qA4Rb
                              fKhsnXaF9b1Bb+mnPKhsJ4v5P30DhO/6hL76G/r273UB7e39b7qGdIJz3UHk44Ip586LeN50sWTP
                              wJnFZnlJFdWnok05o65XLc+rZAKcspXLt+V65Ho6fidvRXKuD2nYA2+D/wC8OrsQui15W7Pyj6L4
                              +mSIGoNFWy5aekR5shwnpDRIYp4hLzwua5cY7fNj2g9H6I09Ckaafvb7sp6SZtkjudpbs4x5fbVp
                              r9E8myWO9aY04X4GbMZUksOG4S4VPfipZzjft4znt97f2NHQWrXGjPtyJbgIjigfIV8xrNWPkb7e
                              oGhe2p2RObS4XBx6KTSG4pKgkAr54p9ulvOtYtPajargYxbXAUjTCIqD3iSueaZGzFOvdyvpRzVm
                              2LFlkKoKonJV+Nb48PIGtHNXyWMiddFbUiyqgfNDpeQW8D+ubnYibe9IgJb5Ubdsdb5KXTPlWzGN
                              ntUdnWt9TTWDbjNHIJv8WW/1Psp5yNuIzDtR1bb57KT7WRRXCwpEPWs+2wl+HjWgDK01q+Iok2jT
                              zg7kQRzurs0/KryN/wDxnv0AdSaTkW90labUg8lzyxXpat/f14u/41n8CbhC2WFWrz24LOEI5jyr
                              OjjtMxIFNufPNL5B1SRaoUoS91OC6ES2w252Nj7+VMc5uIlzmgzggprhKAUgCnTlQU/sb+p99AeF
                              RVMbE5UGVXD99Dh69xPdQOE5y2fyoFIQu6Q460G5S+L/ALb7qDmzdRV5JQPwjd7qB12hpNCROw/q
                              0H48SZxmi+lpOrqw2Jye+KvEINL1UqjtvI9LR8byHMO06MgPJHk3IXZHmI81rzM/kV6uj4Xvo2Bu
                              PCiBHjGDQY5Kq9a4sttteljqmIH1jfLPp9g7jLQTJgOq+ZeVHfJbGTFmlo7S595edufAmOtpu2CA
                              819v7qrrx4Mq+eU1Nq9rtKmi7bHIpIZSW2nFy4e4sIXlVpin3r6Z0JYbXpuN/OTW77RvSwVyOyq4
                              Il9pVz7ceRsgF/lD9oGkbvDsFouVtyYSgdZVOjY8uefspdGFZLxJckWvW1jGzMR2AfyIw5rYiKtg
                              PiEvnV9uN46MNkH2lo2h9CsvQIj7k+6MIiPST7xqS58Pe5dK5p6WllSLt2taet96hW2TdBdmPmDg
                              sBhcdc520lx6aemj2C86du0Tix47W7lkVD99JdaOzvfQW7S9L2d2EV1YituO5XeOc8qXnFNV/wBY
                              1YLJqy23N1/SkoEgK7sIduMdffWK+mg6re1k1ZWo82E083JFNr4D3myXpyrZIyUNWBvtCs5A64z6
                              Q0HrCvfJPZTz0a+2gaN1yGopb9ruwOD3U3tk0uRXnVMdvL6ef8j40ql1lYGIMs3YmVbVfZXrad/Y
                              +a36OUMK3imuc64bjxz5j/WpvOFK2++qfYOHh4a+W6j7C+R0Fxnzp5n0eRaLmmTOAJc9qZpwUI++
                              gFj3aYFUFeoDyJigIVDhNUHNGmcUCEoWfVVPlQ6HufvoTcx8fsoZx1R7hc6G/jlDCd3uoDmO8g7h
                              5++i3isnkt7XaZVxJthpDFVXmorUN+7kduj4/f0RaltkiwacNGZCo64GUQeX8da8zLf3+vqvhaJj
                              PYP0BbrtBGTq7UiGDMYSIBd8yqHljl+OrLk9M77QO2PW98vBrAedgxm3drfLAku9F+VZNLnuftba
                              fjao1e0P87XzGKn45U9cV/dVJhw3nV/du0vTegbIxCtsFmTHhmab3V2qWOXlVMcR5f6wDTuv4F61
                              4d4urDJPcU3BBtwt3DFEwmP461SYlmTSrhrO7a7nR0hMEJA2WUVenSo5zp5kDO1Dsg1i3ZT1a5cm
                              5TMUeMjSZFBVSXpmjXjyhQ6B1zeocgILcN0Jcgxb3NDz8+m/59K6NsljcY3XQmi7tfbu5eLzMfdN
                              zuLEFMqnvU+tefceVfH0lah7O9HWLWttu1+jmyriEsVAlojgJy8QetSG6OI2jbzaJBJYLur7LkgX
                              hRvog8/NKWz0b9H0WHZrHbii3qey9xsipHzXcVTsZJf4xm/We96c1LPlWaPI/BjqKWQTxD7KRWUW
                              W3UcP8BhFubiLDdaHcrhcg96UDolj2O3TLOM/TE0+MyGRyuRcT4edNGy2UGO2zVj0sNS2WEgSdyo
                              +irtIvdnFNPRrOi6MNzvg/g+6QCjyEDnuTxL7q6NO7l44N/x/IMX7TrsBwhVvbheS+2uvz9vmt+j
                              lD22n83HlOE8P30eZS1FtPyabzZ9dOAPXnXRhsn9S8Do1TrTyOtp61OHUkIvhLFOCmybQcbunupi
                              nMt/6z7qCOUA9QFTw/fQ5CdwfWX7KG8rgECZ71B77Nkecd0U+CUD8IUh+vQHFdx050DpO/3UMc3U
                              B0cl7KGzHqxttsN57vhnHSobc5jHo6NHf0TuXF2xRxiWWMb0l1E7wp+6vJ37nvfH+NOCPS2mZPBS
                              86iRXH3V3oyq9xPl9lebsvXqyeM9I+tNSWVpoLM6sc2yJCIc8kwi45fbXV8bVb7Jb6fLfbDqW0O3
                              /gWrZiM4Ju7R25/J+7rXdI57Vu1q2fcNGIVsdzNmqDID6+eflQJeh+66FuUeHId1gJK7IaLY08iA
                              AdO9y8+dUxkDKdMaTnz9U/gy3SsucYWVda/FgC1t5xsvH076ToHsjgMo236fclaFSfdXcor/AAtR
                              y/Wy9Yt2y/yiZN6lt6etcxHVlujxVZXIqxheXu5rRj6b03oRmKNzjSp4mIkm8EAuap++mzyU1+30
                              Hp/Uk+1wwW12aULRLkEebc3bvrEX+Vctxlq/8fPmtu0jXOv+0lyNbbWTc23nwpAmY73U/hKpNfYz
                              oz0Z2n6kRxLfEKf+ECL0Vxpd3dUO73Qz7qllhxSV9EaW0tqJgQfnwm/SpLabnX3d4c/VFPVrnyxU
                              nFzY9UzCnzdP3Kyk0Ec1EXBXiCY8/Wz8KnlOD/tIuvZ5pO9wzaaBYyvd5Ea6bvbilEt6FYNwLR8l
                              ywyQkA20qI2YpgcJ6/30y8Emlr1GvBSYjjQbAcVEeRcF86yt/PwopE6ySG49wkHMFxd7JoXfpL6b
                              ZLFxcWYd9szrzooLrY5QutdmnP1x4HzdH+MamsSGHTjj5L1rqw/HgbJxG4cr61bUXEVxfX+6mTdQ
                              XF/pPurVL6SBBwhxxPuqmCZaAI+I8fKugHG1BPDzxVgkAqc+799ODoEiZ7tMk7uT6qUAmgirM845
                              UJ/ptUzQ03t99CTyNqPWgEq2I+FMUB7b76ATQHU50GxSoIhxe8mV8qy/i2GPaPNMwmnO874FXvfu
                              rzvkZV7/AMfCLO53SBbn1g2KEsiUa4F1B3Yrycp2vc0SSPHqNyxQVh3Y0fkyQ3iKLhRz7az6urZ8
                              4wLUTWr9S6ous/TkVx0YIKCGR8m0TrXfonHLcmM3vRUy69osOwTLwMkjcE3iAu6i58Pvq+U6k+lb
                              TbNE9l1sQ3IkOfdmQFREy3i2vPnzqXGydY32v9vaahlxoNwnstyXHtjUOMO5UT2rzTHlTTreIfZP
                              2cajlpMeVtAkmXEekkeGmgJdyp4qMsuRsnGuN2DTVxGTAj2hu4OxGxI5xJ3NyZ55+rUzcfNN40vH
                              tPbkTs+Gy1FRNzbINgI7Pr8/2U8JY23RLGkdI7L0zD9PvMtwibdcTux05d9B9nzpdl9LavxpB6rc
                              c48lt8RjKglJUR8Qj/C1xdvXTz0wG+doNhc7XH7pEtpNwCZba9JUME45/rPurt194jWjac1dYdPu
                              vagYtrLt0fdJEmbdm1tfaHqklTyna3G8Eule0t6VMkZuspY6uEaPGmNvuHnySo5RXGrO4ds7NvvL
                              FvIHeATO8pMhEwZfklUclI0DT+p4eoEYYAiOSZbm1bLkYfW/y++o1l9e17qDSNp1EyJSpIcdlMAQ
                              nhaYv2WVnE2w3PTN8egQIpPsYJzKL1X7KyqTLs6JNO6uYvExi2nD2vNoSqiJnHSkqs7RVcIhrHcf
                              j53imdidC+NZ1y78ewKXLTgT7d+E221Fz+kxXbp2/wAeR8n4jPpUNQdXbnn7q6p7eLunEZDQ/EfS
                              ncroqH1609e4oguUOqgsXgJcdKp0vD7UhEygJiq9YfAzXOxKoEkUke1Kq3083uLO4s/KhlK2B/rP
                              uoc9VAAPPamKEPwhRymM0NJ3e6hnTdCjqLihLlMquaByvUKujQEiM4APDuLFZbyOjRj2rZvUUuU8
                              zY7LtBN/0hj0RP4zXlb8uvofj4jRwih2p1mzsJPuSJtAhXvgXurhk49PG8ZZc7FreRe45TpyAKfS
                              OgLmUEPW/dVMW5ZdgR7Xu2C36Yju6Z06y2DQoouvAWCNfjV8Jxz5XgF7CLHq/WurS1HaLXHcjsIa
                              GTp5Ukx4kqveFlE2u9PRGLnJiaivLkuQqcQ4zJkANr5ipeslZOKycYFrqExM13AkWyKMPhyEUCa5
                              L1p5xr6k7NrbM1nb49rYuIMgm8paqJIJEKeIu9XPtykPjiKZnZ3qNq0Ja9I34YcN1C3Pup9G6XmS
                              9SpZem8XzTZdHxi7YLwmurk9dSjELAug/wANC6Y7ue71qhZi3fRejdO241k3eWktgHsxGAcBDUC5
                              8yT4J5VHZVdePGpRStEWGTcWBCYhvvbnjJMEP5OK5Z/9L86xTWM/sjla6ZjspDluuMqkhk1yDSZ7
                              pDs8Jf416GHqJX9VRdmV6cupwbFeh/B6qSrxXDROER4UsetS5Fxbp2d2fR+hrCMFx9idcpAZddMM
                              oi/kp7Khn+niHrrUPZ1b3bczc4sCTIJ/DDckcoLXLdt9nP8AYlTuNs9KxYWlnSEaKSafBLXNeL/R
                              SbPiCSr021K42KzlFEO0S2xF+4X4kkrzU21XatSJZF1Y1jyjUZJq9JbbQOIS97avlWEvr8V950kz
                              bTdu9lRtmQQ7V2jjPtrT6tv8qDp7VTD5lGnmoGXdVV9Yv86ynvtYwLNNtbxKpo5EeXnuXKJ7KbXe
                              VzbZMmd6+aZj3ZwIRYaL7678b2Pnfl6J/AiT/DFVQc+7pVo8v+8Ibm9fov1qeHstKCSXPCffWdH6
                              WEhUX8UVWmfGHkluB5ZzW4ZpFhJeUt27pV57YktuyXFwZ9KoEoAJM7XCT4U7Ke4fvpkKqhlEvibB
                              flQ5yFdz6v30N6RxPdQwxxfyfvoU68JbfKhQlVxQHW/OhOEUFT7VCOZJQULGMc8Z61z7s+R6nwsf
                              6JrZZvQ3TkW9FR0077irzryssuvosf1aO322aGtEq53CQgCoYMi5E51zU5OumMoseubt2mTJcGyw
                              EiW9vcHpKLghL8osfxzqn4GGdoWmGbOciWXpDjY7w9Kkd9HCz6vtzVsXNulaX/Jtuty/mu5arOyv
                              FU9g7R2kXXmJ8+XyrNt4NM6OtYdlFms2j5+oNVagdiTEYJ55rAG6heqm7r7aTC2r2cYN2SJaXkfk
                              lPF25g8TRNThQm0a3dwxL5qvL3U8tGL6QsL1t0naYzVhgNyZlyNFNppeRfUxXLvquOKn1/eu1BjS
                              U2XHtLYIDbgoy6JESEvrrt8PWjRlad8/9lejbjr6LddXO3iI1NBzYQyGcmfknPxcvhXVS862bs50
                              Lqu8BHvUtkI1ohGIE+2eEcAPqjy5f41DP2ri1drT+lprS21UfuLK8RHCU9omheFCXn4cfxmua/qn
                              PT5tuPYZZR7WJen0vf4O4DIyG3ibzx9y8hMvJP8AOumZekb+jGyaJ1HBmN2cdTty4zbihILwK0Pq
                              4738ZrLbxknGmWrSOkY8JWblIlTpcctgmZd3Hwqfnw0fLfaFpqQ32zW/S1xnTX7fJdF4TaEu4H+r
                              +HSnmxRuUbRNz0u3Dv8Ap++uXRlpVEmpTaccS5Z8Pd54+6jLbJ/G9o60RF1rexGbc4wIhkpKKn3x
                              z9auKxsq+v8AL1BZJTG6CjbYuYafjpu9ndKlbPYz09dHLnD3uo4JjyMXBwv2UFsge1bpph2c1cmS
                              IUa+lMBTuEvKg0vVmzfvTbXx4zibQTBNqnSp95WZY/1TXjSzV5spT45gbvVUTyrv0Zd9PN3aOsmu
                              MN2C4bbwqiivLPnXXK8Dbq5faDvwiYSnl4h58/XeOpdR++saeF8g6JWeRenRI18aVSJpLfnXbC8q
                              W25hV5Vn4LOH2nt3q9PfVAfAgXO4sVVJS7ffQ5HtvvoCLQZ6gF8T3UG6RQU4hp5pig3XhNOntrL+
                              KzDyXlnZMmSVtM80zXB8jL09b42K1k3ngLHtcNSN4++qIn3V519x7WMZ/wBp+jb7qyQT0u7pDiNC
                              iC2R7VpsF132a6NW0aPGwaVmCrkteJLllyER8/491UyFYd/KBY08k9bNG1C46DEkW1Hf413c+X+d
                              PijnOxt2jZmj+zHs+auVlZE3Z8USA2TUnB/xxn3Um2yQ+jHlAV7c7R9XNSItutgk0+m0Hrk7tUPo
                              +m3rS6fcW284Dey3sjbuVmdvcjUIsTyl7yCG/gi2kqoJCo4x9vWrWcTw/H05p672vRrQxIEX0m4o
                              Kk5JcUMoiDzAfsri+R+L4qXXvaatq08t2dBhqW605hFd2tpuBBxs9al+PeDJ81djtw1ZoBu43RAC
                              dapzzr0gl7wuuEfP4ffXofsK0uR2nSrheY9mR04tpMVNwR7oinnXNnVsK2HSFp1BfrU07Bb/AAfb
                              X2tqPvrhSH83/OufntXyfOerbZdb72+v6XK/g04DXHN415bA6Dt+fvp5lxO/rXY2izt19iuW2+t3
                              Fp8VdffBvaYbF7y1lrJONCso6WjvuMLCamTOKW0+ISkfTySpZB80/wApezxLVq+Jd4CmxLdDLBqu
                              x0nc9wU93Wr6OHWGgtb659JC33O0yWnWgF10XGu6uPAXXbnOaN0l/A1+H2hTrky2ywLgSXkAlRru
                              7UGufno6x1lqi9xdOBIbt8ht1suIMl1Dw6o+IenvpOdB7TnaJH1Vp4RIiZnsNZRWi5lShoWnTek2
                              1Ekf6QDyKKmq4FfhWVnVEdju2npRqwyDsKQSigr6tY37JU16QGnpjAsRyYbc/HCq+t8afGlvKAu0
                              5y0nM48ZwVM076D0zXfqvp838+coD4oL4VzVpePNzjovObz5+ymYdB0izuSgW8PI7jyoakDKPyqs
                              2Up4Hc54ZfGuqcqKU043vTvfdRPVCXxm+qY+aVcKfd7qZ55G73UAxQZ6gPUpziNNr6tAcUKTrci4
                              7XGdRNuazK+nVonnWgWOHDt1vKZcCAGxTcpEuOnWvN23r3fj6fXUXTurLdcn7hLttoaeSKuwHdmO
                              XP8AwqEnXoTFgXaDqbUese0CFpz0oIrMiSLbiIndbDNPjjyKDHtF13B0Jp9vQmlJhNGibJMps+WK
                              aTpa+cJ81u+36NpiDKhyZs9ziIbxZIXfZuq0nor6xt0OzaC03Ft11dG53YGmnGRx9G162MfFelce
                              /wBnk8Wb9rXb0Fp0lNjejo3cZZejDIjhu5+ttX5pVPj/APbMr1nfYbA7QLg9GejaeedjuOCbTjR7
                              wXr3iquz/oR9ctO6f0+LpXEDduCREdeIh3N8RPb6tce38XxZ32uyWddaTdZcjm0jYikVALv93r9h
                              VLDLxGQR7ItKasiaYl6NfgSZiEim7xGSMlJfIS9Za6Jt5Ctj072RWy18GTL0ks2a1nCPDtbEvgua
                              llt7TYiR3Tmvpxks3gQ2B8CNkI7R8ueeVTuXVJlP4z5/+TTKuGuGdVmLEF4HeNJktv7ye+uJ+7pW
                              dHlI0+19ldltpucS7GrpgreFXkAexEzW9HmvrTpqyQFIrOTQuDjLoJkvnWDvWGdvHYLqXXN8g6lh
                              ymJzltaUWwcBcb+WCzn3U2N8WS9D1mc1do2dCj6js9xREa4LZR+KLRCPh5/OtuVp40zSNytkVtLo
                              1EQ5Bia73R7ydKibq61JdbZe9OXIJ9vLaYb20JNycRfOgdZNoTQF4scF28QrqT7qZcejKoCrY/k5
                              +dLZw2M617S2rNR3KI0LduUmVIhMx2phUXGOVLS5Tgnt2o/wmw5BCMiSmcjtUhJEP31hLPfVFc4V
                              4fFY0lHAX1nS54/wpsWXPgF7QLMFvWOrcjii8KYXHSu7TXhfNnQOo4roebnOvDTEOohL4RVfhQEh
                              sTRMqOM++hknDwOAOeI2KqvnigJTUhkc7k3fPFdGF/1A+1IVTTaya/KrwHElEvRgVqgV3Ez4C+PK
                              qvPN8Rz633UG456ql7KGydK4nuob0j0hz20p+Eq+ZfKgR0NypkqDZLG0Nk5JwPtSuTbXb8ZzXt6n
                              nCasEQTQZBCDhKmO77cfOuDP2+g0f/Ks1Hqpjs+0f+BrMAK/IZ+lcXmaFRrjojK9EFddQ6wCf+DX
                              pIxlcN91PV6csVezh/ZvWul7xqW8SLhKnk1GeRVBtvo0mfGXPpU4WgjRthtFq7Sbc4ZLM9DeQ0Qe
                              8hr/AAlPbCt4nWS/a31Q/Ph8VkFRTLngQFPZ7a5s7OmiXqH+SLP1npwYSvjDfBCNHXHck44qYpZt
                              8T8H/ZH2K6i7OdL/AIIdvDUBwR4XFIhxj21l3StnoUD2cWG6uE5L1G/JVshJ42Q4bYpzqWWUyPOp
                              a6O0DanHJb02K+giH0bxioqaY73d73l0rPTfdCGou2bUVk1C1Z7RBiXFguS+hFvTZ+b6tbzrOD+2
                              a2kHbVuWqHhtrKp3UUw3JW+Fv6zw/wAUV07WuyeQ8LcuQr28tmeIQ972eKkuuNmFS4nanoGKzsbd
                              bYQhXaBGmVx+l76PDh+X/Td/FzXNtcj2DaqEPdeaPCiX1CrPHjeQLaQ0Rr2xK45q28kw20uG2Yb2
                              83l543Inh/8AWgDa26k0fFJG5NyCPs68SSPfX81F3UBdsX60XRriRnIkoB6jxR3r8dyUlyHFcV20
                              OM1QkQmm309ZO8n6tL2M/wDb/U17UljExtxxGnWnuQoSCrZj8a3ost/oRmaT06zdCulleaiSXvxz
                              YpxEP83l76V0avf6tDW5wACDFjtsR3hFHHxXGU88e/rWUbP1GK2wYd7ZegTSFCwbgkCEJL86wnPQ
                              juF1QmZVumNITuzutp9XyrYncYy+/R5Q2hpyUKiS7sCvs5c8116cv48f5ePQE+A8VRzXX15VIRMU
                              6RwHG0z3vuoZTooqryoZD2330GPozj1vuppmklAoDnJ/dV+2lKw3/rPup/bEER2+ddjjk4VQ0jh+
                              +hnCKCvUqxsqA8iqnNFpG5L7Tzgtu7iX2JXHuen8SKrX1xi+kgSOYJFTC1y8e5q9RlmqbffdQTwd
                              jNGrK/RieOtNhFuiDsVc/AV4vVkOc3udARd4nPcvUh93lT7MvR1P2w6/tx22RDtUZY8Zh3HJe+4n
                              8JUPJig/k59muo9e67lamlQJTNlhxljNPku1pC545/Ksyya+wGYOjtB2dgpVyjNtt54apsTv8sfG
                              ubPL2bFQ/wA643aBcziWCa86TSrnY7nP3e6s55KSCUNT6U07COz6m1FFedZRSNrPdFE6qiUTV03A
                              Fr3tx0IEEgtt7lSEVcDHYAWwD5Z/jFVmgvOMGunajb7/ADCOIUh7HJI7JFu4fmmVquHxy5ZSDTTf
                              bI1ZLWrRWdiIYjt4khraS5/Kq00cTu3ig7RO2MNTw0iNEjT4jje2m4fkJd2i64X7usAc1HdZb0hi
                              bPdy0mQUPq0l1ddWrKWFO3qHIhqSSnzdPHeN4u79tbNLMs5jfYu0f2ha1s8dmNaNTDwm+oqWMfZV
                              PoliV3SNBs3abqS7yDYTVHDe27HFJzanPqlRuiM+8OdoVzvUCRHn2a7CKtAnHVe9lPJOfzrLojZu
                              6TaO2vWdqt7YvT2XwZ5gmU5L7e7U78dSZ9WFv7edZ3yYUKJPaffklj6X6JsR+rgeVZ9Dbk1vQna9
                              p2MK6e1RYXxltrucLcXX8nlSZaefg8+Nfs2tLBLiKOm5NvtoomcvKKk6vt5fxzqV18UxqSGtLsJK
                              Uq1MTYIp9LKYMS2p7dv+dZ4G503C1PoC9vi5GdQpSLuAXFVtVrJh1veihUgcRZYigkPiNl1XF927
                              2UmXpnjVXqeHDv1nJmIO91F7u3mXP2VTVa5fkaZYxa/2KZa5JBIYVsh5KldMzrwduizqmEFUtqKq
                              /Gupw2cPK2Ac0XGfdQI8AKarzxigJYtdfpB+2hhYp76GpLYNpn6MvsptaRe4P9UX2V1EREZx633V
                              2OOzpJAQY3J1oZzjyu4/oy+ygscQ8+VC7pLhtalQ7QCUHai86DT/AOl3aHUbjGSiPh9lcmz9et8O
                              e2WamdW+62jQZRqkNX+aD51z8ezjOQU60vtt0zFVq2vNCcdvYw2a9fyqymiF2I9m066XR/W+p7jw
                              4cgSBXeJjctLnl6X51t1j7LOxI3wS2QoUt4Uy79LxCdz9bnUPL2xdXJNI6VirbB9HgQYwqQW+I1w
                              m8+REVLs/wDb8DJ7n2gaE1TOcgXPTDEGGwigkpWxya1uGjsHlwG3TUvZppOyXCLoG5Pw5Eg1M3GX
                              96K7z8RZ5D1+2ujD44++R8+6v1vq6RKMvw004C5U1JNpfKq46bB98oSiM6u1NNKRIlCbJ4+kUVFE
                              61SYG+6WCi06X1jb5YOWudGbEvxh7lXu/Cm8Uc70TajYvOmYQJJu0a4yHMbw4pOEI+fqU0nUsrAT
                              /OCPc5ZwwjApou3O3YA4+t1/jNHgW2RLs+mdIxHiuV8krINMbWm3C2ovtwtb4n1beCN8ezZ6Gsc7
                              W4LyddxDzo4NuXkH59ghHg7M8TKpzUS7yfCjxS6GZaXuLJbiR24L8glxgExwx9q+2izhpR1Y7BcG
                              +FLu8eTccCOUJ0cfHFT8Tyjqya57P4CCxI0XGJs/o3RlZyiL9X2JWXFSZRfzNH9iep4fpVhbO1XF
                              BVWjYcyKF5d1aXxZM+slvky5WO7pBkzAOTGLLcpsskSD15/OsuJ5kOdA9qU9Adaefh8ZEJFU2W13
                              /nKXWoZ4dXxy6Grr2qXq3XckiOkSOHklBwhbzv8AVqMw4tL0Qx+1SQ8x6TCamNXGKgq6+05xc4z3
                              VH1V+dHgJet77Ppuo9ZafYvTktQuBpkQRojFwF694fD08q49s9+lJY1PTMS5tNq9MhEw4SbiQiRc
                              l7azH0ltvUrVel01U0jawxSSIqqvb0TKfCujHPjg365xl2pOzG92MPSSEDb552LuVKtjt68vLR/0
                              EDbVKtL1x5SdeRMU6Z4SROtDZXhcHzPPyoYeae8kdVErWF+kN/WWrdT9GSQm+hdfdXouD8cA9ueW
                              c0Ml4UQ7vOgsITkKl7KF3N/uqQe4fvoDzZbR246Uf/k0/wDpYwy4cckxnIrXHuev8P8AQynZ/rS9
                              3f8AnDa9NyHY4nkTAK5vKR7mM9D+09jh6guLN41TAD0SMvFNgm8kZfbU8s1MYsO0SXcbNFRi3WBu
                              IwYDFhoSlvb9hCId2p96cN3DtR0v2VwG1nOuz704wRyVE0FGzz4e7T46pU7k+c+0D+Ubfr3NfE5x
                              NMOGqowPhQfq5q+OmFuXpmLWqZ9wlOG/dZroPFuX1Wv21046+I5X25dZ9vtQpcXnpJuL6+dwpVsc
                              Y58rUO13SFelWc6+rgCSoIueftwtNZwsyoo/nXGYZ3I1hV8INphF/wAKnliebeGU1ijCjJRX0JPG
                              rpZ7vn3cVknG3b1RzNVamvctnivcKCRooCnj/S/d86fiWWdPyGo0hkmoK7d3iXfj4fHzrPFmOSgl
                              ailx5zdqYGM5lFVdi8/n8P8AGtmKuKat4uCRtqsoW3rtTNbcW2oTl7lvygb40iOg5w2Z8nP/AE/f
                              WeJPLggam2uTBFt4W2zDoqrtJF+NHjWeaLH1jNsr6g0sSQhqgoCoSJjzpLOtmdXP8/ClR0ZuQiSJ
                              0FARET4UeKspDGuYkFxG7Vcjbdc5kynfFMfWH58vnWeJuuXy53a/B6PNkw47DmfpG4qmv2DWZYs7
                              wY9nGk9OWaKjo3FJmwF4yio70Xz7pfvqOWJsd3Gvxw7OL1bWY0l1AjoON7zAoaL7U21G4rY7+g56
                              0WHQF8W72G6JOs0jc04qiDitfrDy/wAKzxtUm3qVF1+/pK5t3LTdzk8Jwe4yJEEdR9u1V/fU78fv
                              s02DuL/KTvtoiMy54oguLtTHLHtpLo4pL1qGke2pvUUZCjLw3VFVJQeIkL57anML/TeMt9jBvVlo
                              vEIoz4k+e3BCZd33VsR3apfcZXq+2xolyN2KCA26m8dvnXRjeR4O7Rz8UKb16YWqy9cdnDoud5R9
                              HHl7SoBYGaZ7rY/GgFLJNlzwslhfOgpz0p31mWl/Sp0nN3ur03ER/o/soCPxNvlQHCV0vCvSgz2T
                              /wBYX20jSU3L6y1lB1sc++t//LcPeQpsFuNxW3XQy2niSvM37X0nw9MEFm7R9VT7klpsWmZfozPc
                              N828NAmV727w+dcky69eYK3tS7a7jp107farnGCQjab3BIDIF9mPJetUxw8v0tkn4CP/AGpaASwB
                              cdd3eTcry8ypNtxniAW/+LpVsdXSXOR80dpU+wX66S7hbbheRZcXksiSpEtWx1cRucZfaLHJu09T
                              fMnGmyxzXJL/AI1aY8FzlHINcJoITYhHXHeRS5p8qpErehm8QDuZnEgzRPaqG4irnPvqiN/D0Mjt
                              rXorMEVVsfEKcyT30I39Vdw1K9xvRozCgX19vT5Uh5j/AKbCDOuKcWTNcRV6qlDeQ865IgNcH0lt
                              1gfDz25/bW8S7xRu32WpONxARtsUy46p8v2VsL5xGhHY23lkyJLfGRFJVQ6eRv2rGRru1QmeExLY
                              59EQ8fsrM/Q+zoXm9oQOuqbcXiIn9KnL7qTyHkcauhXGOjrl1FWk/okPaX2VnkPKL60SLE6KNjI2
                              uD9fkQ0Gma5RxltOE/sdaToaLyoU+0zIiQQkJcoSqnLoK0UfatA1lGjtJCuLRut/WBeWfctTynsf
                              Z1Y2e8zWnilRlFtlcbGnU+NTyxNL1Ohdpc2I8XDcOI7y27k3If8AH76Xx42Xi9j9od4vsWRGfYad
                              Q+4WGBRC9n76fHGLY5KWFH1GQmw5HUAU14X0mMD5ZTHKmsi+FE900Fre92ZsLTeoaugu7hiu0y9w
                              qXKo5ReZwPWuf2k6Xkpb5lwchyFcwSkOSFF9iD3ajlDzL/H0t2VT47hNBqjVof6WA+jm0wm50/yu
                              74ufSp3Fty61+RpBZW0IyI+CDtAXUym2s/8Al5+/DsAt8s7Vskk2bhASc1HypplK8nbp4rgXCU8c
                              /wCOgouIIIwXLzrGliygrkIpZoJw6guL/QCn6NMHq9Z5powxjnQDRNivXnQHFVfIiT50G49SFewf
                              1PvrLeLYzq2sdsOY5vUeSLUct05x0aNHcuijUEa+Wa0NPWJhDedIRLvKO0V+HWvO2zyfRfFnj+sM
                              7Wv5RV7srT+lLE46wyCqsg9qCpn7c/bWYaePQtnHzo7qDUeqp4HAB9zjHkyLwqa+sS+yuzXrcuef
                              s/NsWpTBsps4AJ0tu1Om37atMeI5ULXKNMZlrGOaIttH3zEdyFjpQhclsF8ixonAZP0RlsUTeK4U
                              qeTjfKh27a0uD6nbrHGJ0iDYTy9UH41olN2Nm/RIwRjjmLnrEBcl9lOy/iXd5V3ixXQdFOY4RUKh
                              K3lDsaQLIekzJ3AJPF5ZpWXbIh3LV8lqPw4TpySHwmA4Ss7xK7Oh+ZJ1HeWh2yT55yCesK1n3SEu
                              XSXYVxGKIBdHyZ9ZtV5e7zrPviVtU0iFwnlXJOZ65Wmm6M7XQAXH2xMfb8qzZt9emyruBGdH6Hb3
                              PZXJ9qkp6PbCKcTbeBHG5MJR9sb0q5WwiQIzTxISruI8U03jrqQJxxlVu4vLjr39tPN3UbtsQ/w5
                              eLTHKC3GV8h6FnxfOrY5Y39pfuqy0zrdhp44WoIxNi6uUVOe32/uqnjIfDe0O06jt7JNtwJjcplv
                              Od681+dZ4yujDem3Z2Fco4zY8hsXGV3ICptLHnU8pxT7enLJqdiEaAYHsTnlPJfbisPMqJv58ouG
                              mkR1g2UHCBtJPfjNLXTil2LXjttmDEG5nsAVUNyZEl8kqVikysGczVlr1RbHAucVluQ2qK2YOcM2
                              s9KWm86FW9VPwoSw27gbfAeRAcac72Odb4yq45Nu7Ou1K4RGmVlXmU9gsm248pAqr1FCWobMVOeT
                              b513tWpbaL6wG0kI1xBFE7vLrUJa4Pkaus+ltm26uwlAVXkK88VfF42V5Shx60xKAQDgC5hJDi0J
                              nuKHqo4tM1wiIcbVxXrPNN0xCaVZ6gPUvCxJt8J+XJBlG1VVXpnFc+7Z649HVplaIMdLFp85UZlo
                              Hia3CbnQa8+217GjROdYlqb+UKelrRLSFcHbpc3nSHiPs9xkPyQJKbH26PWNfPl61c5qaQ7PnKTk
                              yQW4iFvG/JJz61fCFu6nLlqdiFCFmDHbiio7VFpO8ZV0yQuWXQXfr7co7Lr7e1s2xwCrzxWz0S3q
                              Ja7pObYaVBB4kBEVSQNy1pai3/UL7DCo5CEXHyQU3IKbsfP30Ft4ZsTAxmeJNc2uPKhGWPsrZOku
                              fEy43mHbre7KSayraY5ofWm4TLbxms/WFzudwFq2ZEd2VRU3ZHz9lZ5cRy29p8NNX++LifOIhPmo
                              tjt/ZU89nITvRHC0xGt8VQRlBdbVU3IvIq5ctoJkW5oWl4YInt292o3Lok6q5cAhZ7omn5tHW8Ur
                              8RsyRF6onsqkrFekcVcRBTmtb0CCCKuguE5qu1Kllw4gttsFIgyjbyi+JF8VRv6DjVjcJolcBUVz
                              nn8lPOl6ExLSklhEBtQBfDtXmvyp5nwtxlUtx0tIjNrIdHbnomOtVx28TuqULz7AbhKjjWPYic1+
                              VVx31l18Dkpq5Wt03IJE2qKnNU3FXoacplPYk4ubJrG7x2PRJ0JuY0hZEj7pCvtXrRtk/h8bYMrT
                              qJmYCsSHGxFefI0RVqf8Wx2cGVivdokNGbTwK4uRQS2ki1K/rqmw1dWm27o2iOgguipfR+ZVvDTO
                              CLTARrnGSPdXJRKeR4nF2VLOe1McpXT0MEk1aavZBwj7ovHuFf2YrP4thkJLpB1Np+2sOxWtzD6I
                              hGw4hCXt7tRz9q45Rt3YFdtWS3GoM6A8kQMI6S7SXb5dfZzqX4ntnlGk6ktkiJMcdjxhNvrtXntS
                              mleTv0f4o1SUQqSRWO776ZzFIEkhQlRtM+1KE3BGUZKputp+lQ07t99ew80niM+Tn3UwMkYKvL7a
                              U7qOtpQyuspxi2B1osW1Y9FNrmMaZhyrzcwHYwypDn61ebtvt7XxtX9r5s7TO3i+6guwxI8BHoaK
                              QjGc3bUVMYJNpVGR6H/yFp8C8zogSWCYgRjHIgTXhz7lKqYwt9gSSMxqfshSydcAFHcSdz41fH9R
                              yQoKXZltGFjETqbj4zns5eH9/wAqr5E6HXwZl3QwnOI5w04gMIWQ3+1aY3eLqPDNeZLwgDHNB6UM
                              VFwatUmenpNxHDK7souPjWypZ30FdT6qixSW32uW7KMuY5LAj8ab8RuQcg6fvt4d9MnFsAvVLmtZ
                              nsknpO/gwsemxgIitR1VU5qqJmuTLb2p39HtvcgSRFskVx/zFB732VO5dPxyXHyRGi+Hyx1qOWLZ
                              eGnYmGwNweS9Khe00nVVLt0V2MbaAe4k5blogs4GJNsOO428iYFR73upplwvEGTbwFVdF0h9ycq3
                              zHFvZIw+lHHVfEIlnHTrSdMKrBEcebJCwiGS5zUrQJI1qRY+SDG0lGs8qEpiwMpKSSafRI3taHHr
                              U0yCDebRFcQtylu8kRcZpgEpun+JkycYH6zQH4iX63uWjy4FHN04e3ckTYKeqgbc1fHdwvFNMtws
                              rhmGyCl1RE3FXTjv6XsQhi3G1iqNgnC9ZCGn+7pokWubwLkEkg2AniUR6VWZSq4jSAka5zwU3zIU
                              TArWeSktFMApFvMRjsgQGPMSLFTz9qQ83OIHEkC4JSo/fMEXoie+l/joxrVNJaoamW0Ic+DGejnn
                              GRwrfypOKSiPS2tzs1xbhsyt7PGUERg9hAPE6JU9kNb19Gw7nbdTWc5rBoRi3zRV55qWLn3c4BpE
                              photqsML+nj9lUjyEYpACSq2xGQV8h3Fj7K0h4bo+GW24kVUH/Z0A5wvyy+2vYefwlWRT20zSDbb
                              I1UUpSO7BrO8NxeaVhRnpXFkmIgKZ5rXNu3fyO7Rh7in/lDXbSzek0gu3Ilcc/FI0uFPl7B/fXLL
                              19FjOPlSK7agnG4MckWMndw5j91bINtQ73fH7gTjcbcjLRKjhIa8/Z++mkR7AoMqUk+Q6wvc28kq
                              hHCuMp1o3hEyRoUxuXGabz4y1W2wmIgOXCSyiPvLkkzTfaXqs1Dr6O3m3IQNmnLA1snfZMr0FTb3
                              GeyIopvn1FFrZ69p5ZLGz6dBPp5HE4qomU3dKnt3JWiqO2Cd5wxFfLK1x/b30WypCqYipA9jH1C/
                              bWd6nZVjbZYOvNpIbU3BwqOAvP50NFxsNvg2arlEHCUXZwT0Qtu7gcvV9lROHbiyiuMJ4RXdu+2p
                              z+qRFOIy6wLBgmRT7K3ykNJ0MS7e0ctWl6DkunWjzjeL6zW0BdFZCZECHnj41nWCG3gMeSRAiKLg
                              blFfq1z29YOLXDB1txQbyBkh8uWR586JkKfajMtNm653TVMIqeJEpsb1Ohu5BwGf9Ifbjtr4sjhV
                              +VVl6ZUxIsZT3qgCPqEI98vnU9gPyrfub2OgeC6d2p9b4h24WR2OamLbYL+SGM0/W/XFBcbVxRVo
                              2ckfNFz5VfXmFK3bjiErItqI+3dXXhmEuBcW7fH3i2biivhLu8vjzqsyUxsGtt1FBnMNvgqgoZyJ
                              8utPPa2Ho9PYgFJcebaTvNbhLd0pVsRXpKyTFt6HBmNq46u7vpuwtLVJVw0lxt+6XJiqe0u+orzX
                              HUqnlGy9bv2Oag/DTD7bxGjAR+TJJ3fOpf1z7vxbSpUfjkgGwKezgU7y6W1JdTKtyMovnwKGHEkP
                              88OuJ8GBoRp/u+sWPlXsOIg1zimaTlv6/wB1SpCEwpII5XPuqedPFV2g3SVY9ISiZImjdVBQkXqv
                              PlXJm9v4U9PnyfPmXsScefV4mQ6rzJf8aWPVCUN/0eVIZkNGDZCuTJMEvzp4jty7Fdfb6yIm1bxw
                              pp7ciI+e77q1GW8cssOIkcX5KkZEG7rim6az0iXmfj8UKImUHCUSp0M3S7MxohOvOC1gN4oq+NPd
                              W441O1nV3iyri8sgWiTiHuyX7K6cLz2ller7TVoYt+DcbQzLnuKo7tnfwlX7NxjMv8Iixnzrl8bk
                              Ty4s2LnDaRVdRtc9N602Gj/pl3SIEnUkEHD4no4t9C4a4JfnVZov+JZbpaVaLuwktH4lwUwJVVB3
                              YVK26RMpk0aHemEZRDFUVPL2V5+ycUxh6VdhFguGarnrSKBs5/HXBbV2Fy21HPJSJbcZwkB5Oi+V
                              L2ninOMa3Jt7O4ELJiic1Ss61esx314bjD4D30ymaXpEgyaF4+KmemKwC/TlwJ6KIouU2pnnSSts
                              PXm7R22XSVxtDxzQfKq4Ty/EM7xmsrVlqiPLKmTWwIehmSin61epo+P2I/fMT1v7StMvOtuBdobu
                              OqKfSrZfBNN8osHUkC5xzEBEcJlSbXcH9Ya8rLRsn8Vx3RR3CbFdcIAe2mPTBVzXVsn6rjsUclh2
                              RudJSRPrF0owzsCnWKBGn03dL8nr99dmGwEXGwBOjK2224ZIiIiBXTMhPSFbVG0NORH2OGfRUT99
                              dGF7FsbyDaHBFyGy7HXJkO7upu20L4+hBp+7sRRSOrmwx5Ki+dZTdaXp66sPxDjzTUm1Dxp4U+dT
                              yPhWk9mN9t1tZei2oE3SF4TvETvJ15LUuOffkv35RG8S7VUCL/s486Z51cF54iQWmJA5b57m6GFi
                              lyXO1XF/+3ihGnTb2Eo7s17DiIyvtoa8q4pCJNvb3uopjjzSoZLafZntUg6anaKWPcJRBIJwDARL
                              ahJz/wAq5sns/G9Pnm+PWHQ0Qrfa4wrcZQbpMp5dxbPZt86R6FoFkXKBOjOA60LvTcpU6Wd6oL1K
                              iqGQBAbLqCUJoq3R1I6jFa7w9VJKJTT9Ctwuk2K+ouvimemeVPMuE2c/VetmkaglnJkmRNIQkIKv
                              d288U32cQuSfKsXorIpHNcJ5LSXcll7QEtV2d/E7FROuC6VP7esCmp2bnblLiOLvXxJXpfFkrj33
                              gZculzc/6+6n6VerjjHnZbqnQLHCuMQpTl/jsGKd9pxl01H4mI7apMeo3dUOJPm20xJmQW3PRfKo
                              bdEqur5F/rTNLa49NAWnzRHMY614/wArRx62ndMhYd4R1lAbcznrivJv/q6v1KstulvoqNjvE1yh
                              Ktc2eUNxfgrjIoJskgp091S8lTLTQG4pmuMdKPILeDGQUbNtBVOfVKl5sdkA2ZIZDw14a429KPMG
                              oEpyBOFHHcgo5JcYo8o2wIdqut41njLGiqWXhVMD59P8a9n4Px/J5/yNsnpgkxJcxlZ0u4tAq+Bl
                              UNCL2+r8K+q1aOR5G3LppiAqhxjNwALwmJYxTcneFmV5+nolzvFpUVjXKQ35psfKobtM/TY5f9tG
                              0hctTXhURxxyS4mNwEfTNeB86SX097R/8wao3dAFEetchS+vxO6vzxXjenSk2y3yZRoTkZUT2Z60
                              0vsUUQLKrZcTYnvSurHOMk4Be0LQ1wKc3cWHDAFMTJFXn7q7NOUpsRJpcwhxBN4vozbTd86fqkvX
                              FfGbOB2M8gg2qpkvW+H2Vlb0eWWRcEGM3ERTdNVQcdaW08y41jQtqnWYPTrhgpCl7OtJxzbshkjz
                              7v0m8l3eeaxyeUPto+4iEcoti/8AeKB5wtAcTqqJ8XMUyPkkKvmtes4ieL+QP2UF6T6T+R99T6xI
                              hXFziiPDDlmo5LaQD29RZTkO33xiSQiySDt9XPLyrnyj19FfP2s3SnyzkvS3CbVMkSripu7y9Ae2
                              nLul0I+MYMgmdqU5MljdRhttqKplaChaLOAXnWHHsd1UVMVkbTMGzP3+6C8YLwmOa5TqlPHJtyaH
                              brRHVEAQUE8sjiky/EJn6N3KzcFsgbBFbTwriue4+zqRuG4znYCJnrRyBTau043fIRuCCcYRROfn
                              Xp/D3SenH8iemFvxX4chyLJb2ONqokK17MseXli62rwNkKkLYrzUlX91dGKOURyccLkRZTyrKXnF
                              ham3ymMpFDw4QudcG/ll69D40rZrHa5D4tCiYx7q+Z38le7MexolqtbzTTZESYSvOzyNInpBcdeB
                              MKQ8+q1K1fhiLbQMzDhet1pfIcT1hultQB27anys8S0ika94crRxnihXG2PCLiJz7i+VbLet8WF6
                              +jS27qb20jbRskwpeHp/Hyr7D/irP68z5mi/sZmcp6Q2APGRcLkmVzX0P2znHhbfTgvOJlBIkT3L
                              Ubl/WSWwRaftEaeYuTW1NMiy0GPGf8Yrj3/I47NOm19I6I0AFjtrfERWXXREnPrr7lr5n5u/r2tM
                              5BRJs0aQ0vAYce9m7lXl+Syy0zpJHAEW2FH21syC6kaVRtxAxnC+yrY2gN6p0+3GbQ/ReJnPlnHS
                              vR028Aan2BxpsZTTZuxHE9vSr9NFZGYaalq1CbVCE9g0dFvGv9mmn5LoNyJjgNoKYAiT7V/ZWJZ5
                              NLA2AFG1kCKj1FQP/wAtCOWR0XGm13Ny+GSdFRss0JPMOvruV27yyRUzlBIBXFAPNuPvJkpU573k
                              OF/tUI1dn3yUuma9ZzEluDORTl7aGUnf+QP2UhSh9q8181rK6sDOohCdpufBfYBxDaXbu9UvKubL
                              H07tGyPlu9WSM2pOSmXDJFxs6iPyrm5x3y+QUkTo8VCUGUbbH2LTScOpJTjVyJ3a8KAo5T2pW9AQ
                              lw3yeNYq/Tom1finnWRLK8g80fY5MSD6QaqhnhRRRxhKaOLbk0S129Sj8R7mRUtcsyQr1GaAFPbn
                              FRynHUFLmLve4XzpJOGqC0jbgoivqLn1SWnxvPxLLDtUGq9F2W9mmI6g/ncTyDtJVrv0fIuP9c2e
                              icZ1d+z2RbScKNIR5vyU9qr91dk+a5r8ftRGNAz9npMgxAR8lSmvzWf+NV7pPTm2UrqcxM8pyry/
                              kfN76eh8f4/Gx6ftz0Y22mo7jm8UVVAc4rw9+/tejMBxGstw2KhtiDQ9HFLurXPcunk4lNW4xaVs
                              o5c/NOdJbxWQ23HBk8jWWt4kJEUlUlaSl8yeKbb4hmagcZERceJOlZdjZjVi9pQpDBvMNNohjt8G
                              aT7ZKpMeMm11ogG3ySRHQiRO/tTC16fx/l3Fzb8PJm1z7DvSVGVDacBsgTA43ffyr2tP/JXjyNvw
                              u+4qIXYzcll7SUY4j1Jz1hX2U9/5Lvqp4fH8Wvdn/ZdZLI6FzluJKkiu5FPmg5/j7q4t/wAvy9Or
                              Xq40OXMZVUBgUwPsTCV5G/LyduMXlggekgioQkXkic658cuNv4ONO6fcJ0VRlAFPEqlVJU6tNQWs
                              mmx2tgaJnKjyrq1Zm6AdXWpUt5mrWFTyr0scwotP6dzBNVNl6EQbxJO9w6q2fq809oiDbh4z4RpA
                              Ku9EDbzH2qhUM20ZtrsbRthBbxyQRHC0OPyKB55S2rJc/ZQx1DkLyWXIP3LQQ6fpY8ilyBD2FuOn
                              IeBuXt3msxFL8g6AISr03K5QCKQkeAc+sP20K10hR0FbJe6vVKllOxfTlY+f+2HSt7tFwmToCgUW
                              QXEI9mdvXy+dcmWPHr6spxlEZHZrhRZhIRrkhNPP21lq4dughClk8DZF7UFKnlQhWKQ7cLmIOCI7
                              vVFOtNhXPurZYVsaGG3HRF5EPPHxq0edsvV/Gt4ttJgsZ91JUcVPeInJfpPuqOTtgPuoGgGQpnHW
                              ue3/AA3VC5HkAqEC90ui+2j224uGDjYKZrletHbB9ZHosc2ykPY3FjamOlH3cZ9cVl0bR1r0VFwC
                              9eVL9zZjxd6Q0+68yL0WMhDy55rk2bVsI2WxacmMI22qAJIA5ReXtrj23vt0TFeNW3hPKOFQXRyb
                              RLkhPzqH2HmBuRa5CtkaI6omXLKEtH3Gk6bh6TcJ0XnkVFHrhcZrLt6aQ+9ao4OlxDVM9MUmW3ik
                              O223IW50yNeW1ENOVJdsoowscaOiIJjyJMUvSWcVevdIOyYBvwTJGeeW3RHC/dVsd3C+Pazm028I
                              geimexxfLHWu7TvnBdUrtxsjMZxXNrS59ZEzn/Cty29Ry0yI4iDSYab2jikudqV18KYi8c1NeQ5p
                              MrchMWh6YtTJRxQRMsJ9ap0t/GmaftPAa2+jonNOarmuvVZxHKn9WwyS3E3wHF59W0ylXwnKncmZ
                              auhzItr5PKQqm1Bfb3jXo44yCZBzRk+fBNyA5FhKoHnOzHL24p4pMmj29yLqK3AbbkT0mIKptbZE
                              T/y6U0T25d9KtkcHv3yDVOu0MfvrUT3HebHii9M3D05hyoBTDsokUnPTiH/WcXxUEdVxwTJFjzA6
                              cuPuxTlPNNSUHvFLH8lXCXFAEoCSJ+O+6vVcr1AeqQIRsF8qDPISjjFIpj6V+orTD1BAOBLYEmjH
                              btXnUdmK+uf9sc1D2NsW43pVlLgmid3evJPnUbr49HHf31WLa6bkxXnGTjluBNq/neyo2cdM9qfR
                              dulDfWUNOESdUxmsxrn34+m5wWkJUVR5AnP41fGx5tnFwjaImESnzvU/xWyYnGQ1VNy+a4ri2LzM
                              M3iyqiZFnFc/6eZBqfEfZDaEYl+Fb4uhW+jGS99du1Mpyzms7wtqHJc4QqO3OPfWc6zrlosci9Tk
                              ThKoDhSFF656fspPE2M62bRmm0YBI4w1QExl0UwNce78dWvFo0G1bV9Ht0YXMeIi5r7v315uW50Y
                              Yri2afaR425bLguKC4Tw/HveXlUMt3tSY9XIWCQ/GEDjOB7xXOaS7j/UZDTKo7xERVx5I2pKv2Ut
                              3dZziln2AVkq2bQqQEiqmOlH29aftungwe8xHmnVKXyYuIlpEXREVUk/J5Vs2WFX0i0w34ZMrG3i
                              nXnVPLoZFqzSjVvuXpjTCttOFjrXVqvovUJI4OL6HJbTZ9ZUz91U7xiBJ08MiQrQPNh57jBVT7q3
                              7S2dTLZo6Y1h3uSA68l2pR59TynK0XSliktDsZ2gYplCTn/6UfqGXqDe3WxWSV40N1zl3uuK79Oq
                              8cmV6n3NsHYLgmTi5TCd7pXRjhU7WTdoEfaww284SCZoWFyWa9CfjPINyIdvkvBJMyBwBxlpjeq/
                              KmhvJIiJG4KNOSJjpeYmxt+0v8qeFyySmXOFtNh24CK+qDSLWk6fZ9JfRdzdwcwqdBPl1oHYUhAg
                              qhrcBVfEpBySgjrYGqucNi6OCPXaPi/NoCeMZ1n6N223XKexrH92nMIN5j/RffXpOMpHVQiFQxj3
                              0AopLgkom0PLpyqQN+liCqiN7/lQYgpeV/EilLipCm5hjnaAp7eVPFMT8G0ztRS+Aw02W7lheVcm
                              68dWmUHdpPZ/pKwNvnMZjrJDxIYct/t99cOzJ6eqemCcMhvP+jQIrI+qQtIipS4l349GrCb20PHW
                              qS15WyePUtGhTxc6o5+kqy2XgFSx7E6VKnmSM7buPuxuDNTynVsLFBM0y42JISpsT1sfupLOLToa
                              uVgUCMNyLik42e1AdmUX9mFLd784pfLhpODXSGkQIheFklxjKYpLtkPMW36Q0wEWKDtwYcWPxNqt
                              OeZ+ZV5W7d3rqwnINuJa2J7FqjOMoLo5A1HAfxzrgs6rPS9Y06ywCSZBI636wtd4KlcO38b9si1Y
                              ctcY0JIb4NueN9NnD5dMd73rTfRRd8ibbrlpoNzUaXHFNyoRcUUySda2fHpLvj1ytWnp+FJxlt9c
                              8iITpvo4yb4qnNOsI2QxjjECdUVP7/gpLhVJt6opwRLQBuvObTBPAqdaSY00vVpZBfvEX0n0UXGl
                              7yCg80T61UxxaGNeWl6TveVoiwKJhE6V0a7wgPi270pomnWsqOFEkXmi1toW0PS4yFQHdoonNF25
                              wvtrOMuUx/RJZdMx2C4ZIKqqqqKIZro14dc+eyUdWmzHFXutur8Gcfvrqx08cuzP0myre0Aq+5HM
                              ETqqjivQ0zkctvVJdjFllEbQHFJOSKnJavMYyso1zJjuzEAZHfbDBIBdKtiWhoXQFE3TXmvZl4ud
                              UhMnWrkgYRy7uAKdSQjrS9JF6N1bu8hwV6EKEp0Dp4Dgp3XLmpH5ArZEP6VA6eCXHAdjLkfi+Seh
                              Z/tFQY6DgukRFOfVA5riIO1f0SKgFOR2iQOAZvDt8TrDe7+zVDUa7H1rscbmDT1/uoBS7iFRIs5p
                              GEUKG0JRJRTypfxU6LO/xSNn3ZpvY7xeWGYlnF9eMI70ROIQ5Qetcm/J1/H2zrKe0yTxZJyJt0Wc
                              6BkAtr0FOVcFtr2ZxkM63OJmQBGp7lJVUdtNijtoh0+76RD2m5lRxuHHSqSvL2zqzDgpncW75UyB
                              9uIEkkISJs/VxUweSPcWEwUZp5F6qKd6gK+YcNAMJDZDn6wlt/rVqn2Bu4wAeApDatuD/sy3ZqeU
                              46ML1V22zPyJyE2ajHz5j1rjt9rScbZoDSyelxI6sibjyioEQ8h9v7q5N1UxnG4S9PwbbbRCe0Lz
                              qDuVVHurn87r8q4fDyW8piwvW10bYniEGQDLrYblJvntAemftWrY/HuX8Sz3ekeV24ozBG1SpInt
                              6+f7Olep8f4Es7XBn8rtRg7X7GxFILxc5hCQoquhGwnn6wnXZ/8Azp/iV+VDoah0JPAZ7Oshikf1
                              hyRfDvf3qy/8f/0S/J6hTe0e0WKW6Vs1b6VsRO+Iufs7y1O/8fP8E+V7Wlk/lCwrU+gXW9MzEL1H
                              UVVT9IKXL/jvX469fyourhqeHqm4sXCLKF6MW1SQVyo/GvM3/E8Px04fJ63LQcSO7bmjQMZrz7jx
                              1TZ5I+vdJgaK+wztJU7/AL/Z++sx9KTrJIrTbFwcYdZbaL8gcZx/6089mg101avTwNHU4QoWBI/W
                              9uKrhha5fkZcEmy3W76AiV19PCLTaGf9Qa9DVh6ednms2I9x4aOg03B6rveL6RB9uPD9ldWOP+pX
                              P0jyBteVV2c7Mf8AJEUtiL8PD/aqk9J3Lqlvwm3AN1xG2xBFLPhFP8KtiK+cbneY1wv8p1ZJk0pG
                              PcPd61PAkNy4QADRTZmTxuBuGJins8VUIkJcYTwOh6XcniT8UqQmB/rUA7EkuvuCESVIBVDLgvMt
                              NiX5pbKAlNNyEbUyg3JtCIVP6Ue9+rQCzWao7ODOVoy6FJER/s04PNtSXEQ1t6uZ8zkBmiBKGMSp
                              lYEUl+t6VtzV2icCcQiTf0x5V0uZ6gObvdSMle3P++h0m6A9uQV50A+3JAE73nUN2nqun0qp0Sxy
                              ZaSHoTavAmN6cs1D6ee3R93ABrXT0B+WsqNNFAQERW0TCItSynFPu6CIK+gT1HidMc8eIalb/hL7
                              EyPC42JiSjnyVKdy2cqbG38TvvIHswXWsYumkbYBGxcDKdedUCpuDAyCJDjkCl1Lw0BRTtNydqyY
                              zyCY9cj3fmoVDZ6jo1VEsiPjc24t3Qm03JskNJ9EnsH8mvP2V0+XH09opI1ltzcxTAiQB2oO3Pn0
                              Tlmo88mfbypmrNUzpltfcVVQdhbdyIma7Pj/ABpfZd2/kfEnbDri8W+eKRCPjyX9qkPPKeaYr2/j
                              /Hn9efn8i2Mn1L2ipAaN1ZBPyfYKbTH9uK9DH40/jz88raBLh2qXmdlMOKnkrh8/uq8+Oncq4xre
                              SjQf9IvqSLlUM89720X47PKp8bXlwVs4pyXCaIlIsObN33LU8tHGdq2t+tn3AbakG1tMkHG2p3CT
                              02Z2NT7Gdey7bqiBDV8VgSTJFHyTpXlfK+NLHofH38foF2a3kJEJthpW2BBE2pnrXzfyPj8/HrfH
                              3yjy5nGcjKEkMptQU51w2cehNsYZrgolhvjceKDk2e/zGJHBSVPeZep+lW65wfbBBYNM6iucZJFx
                              fjQFx+JYc37vz9qd7+sld+jH24t+XRVbrSkBj0dqY+2K+JI4Axu9nexuTz9avVxwjzcsr0tyOwra
                              uE093eaISZJT9tNz0lclHP1EzEIUffAB5+IsY/RrPFuPsKdoHaPZrVp6Rw5jTpvCrY7GyXH92t7w
                              8r58tMt+TJckx4xiplktxJzX7aJkaToljszjFSOQ8OeiBuxXTAkKw+CiDjVxd9io7v3folQy5cdF
                              lgSTjWe57cbBE1/4aciQzDFsU4dmnknqoRju/s0A80wxxedodDJ90fW/s0BKFhCQwZtQqniUnBPd
                              /ZrZ+hI9GUOb1nA1XzXf+7lVmilENPU++rOMtVM+vKg3uk7ffTnMKTgEo7s/Kg5wakd1ceZInxrA
                              SpF6q4pyEA642JEij5erS/xWBzVbwOtERijuE9UelcG70ti+fL5dWY95eJsBbEiyYl3d6+2uaKWc
                              GFjkuuw0ehC+02fQQkcv21RC/wCCBkUQ8lFujhL1IXxVFoKkuy2EDacu5xz+s66Taj/dqgORopyE
                              N23X0ZhES7kIWnFX2eHve2hsP3ePemLYq7I7gj04bpNl8hLcFQ3eotgXoizRZVuSXOQW30xt3GJ4
                              6152U6pKL3XXLRHbcizX2AHO4zcVALp0H/PzrdM9+x6UWsNSuvW1GxuCuKWfxa9K9jRjyOP5FfLv
                              ao3OdnsS5Dp/QgfDbNrahF5ln7K9XS861813yQUm5vkRblEyRf66pXqaZ2JZe6ghINzPLOPqn/lT
                              onBe68kX4LWVjzMp1otylypLOnSGbtILKbl5eeaT6/RsW2dikT8IRWX3jI5MmS2LHLwrjkleX8nF
                              0a36HdnMubbY7cSQ3g0EcrmvB+Rh+vV+NRbcbldJLjsFeK3gFy4RZRM+xa8C+3fLFHcbDBhWGTOE
                              pUqVuQ1XiIakv6uf69ZJw84JNBQ71N0+36HaosIS9d5xHnF/NEU2/HveyvR+NHNuyhuXGeYeWHc7
                              3Mdx/QkRxhL9FsvL4l1r2MZ6eblYjla7CLiotrBwR6k61xcfHdQnQnfbrZrE45JdjMxW2eqJtFed
                              JlFdU6+cO0bWjmrLw8TU59YYKoizjCfdU7eOr6oe0cgMNm3yLurzMqfC9ZZwTJIAvFgseQSuddES
                              s9HSdBAHbbnPCXjmCWenXu1qdp1g2R3KMRY67NqKT+5S91O0phIYJwyZcJF9bPSgJUf0dDRG2ZSK
                              qpzFRoCS0UZVInG3iJR8Sv4Bf1a2ShKb4QD+Ikrlc915f/LVoBhlgv8ArCp8Ks53cMf9oKg5omWC
                              3b3yTd0oMQgNJnhumvt50L8LRMUqbyiJeJM1gd4QindSjhDLxbRzjNFVxDGokeIFBp0Wtw5XaP8A
                              nXBvXwYNr2KrbziSh9IcVNwcPrmuLqmfqImhtTMw3PwXOVWEz4HRIiTr9WqY5OezjUmr1HaIVZaJ
                              WlRF3OrsBE/fT40qYF/iyTRqFGkys9OGPcX9KrBIiWi43o0Vu2WZlS6lJUnV93h2/wBqg2KVP0de
                              YjYvFqhxsMoKsss/RJ/+XiFUds7DxYQrRqONGbW0Xd6RuHcMZ6G3w1+Jd0q5piaU1e517U1S/MpH
                              RORHxN4/bVMcJ1nnQTfpTIsO+hkiB15LnK+2vT0zkcm62si7UY0qdYTkrHdM2RVNrhIKn+b7a7tL
                              iv4+YJyMypZJI7jmTJfPzSvT1X0lXZbOnEhgENuW7MDG4jIdlUQQETHnWdCXb4sOW7w5zhCHLmBf
                              trOnWq6ZsgEJpfGijr1bVv6QfgWKndkbi23sFbYl3qGwyPCiwCF0nzbQixz+zpXnfJdOH4+3rbqN
                              q5PtlEukUnQwiAi7e5j91eD8iPR0XgtW+TH4wLBYZekNZDvO8Pcv61eVdPt2zNCdXXKTS4jMCMwR
                              byIkckps/RIfvrLp4fHLrQNI2vtFmQm0i6zsRseoy1bHWce3BITpJ/Vrp0Y8ce7K0C6xtmt7Pc3W
                              b7bxuAj60O7ONIv6PDSvUn45AjctVQoZLElabmE5hCJHX8kie7cXepT+LKu0TVNunyDjxPR4y89z
                              bzG01/SKlyq2nFm8dGnyUWmy8S99FzurlyydMGmnbc/k3UYQm1TCKjxcq6NM6Td+CJoUYPAcIF8m
                              nBIq6XN/DgSDzl1qOmRQUw05t+2hO/p8JLiqolBjo3jYP0BEX626nMeZN5eYNRVyW3cjC92gJkfi
                              ZIFBlHMY5sf3v8qIEppHwBxTbbMhHmJiTSf2u9XYEhfSkNUbiQSROWHQc3Iv9akAnRoi8MYlqheH
                              FabTxsrScV48qMp/QLWcI8qtj4WiTNb+BwvCpYXlQCDVtwdp7h9lAJ4LY+Ay9/OjWRx0WmGSe2qe
                              PFupNmzjoxB2rp4yoxCFtJXkTah+r9teVv2x04TrH9SQJVzaMJDbbfD8QAfXPvx7q5fLqmyAMXnL
                              M6cqzvmL7a7jBwtyEPsquOTnuLQtOaqt98jKyyw2lzVUQhdPACidfF8atjep2exbbJMxgFhKpSXT
                              TBAg7QH4EtUl6K0PSse6XCG4kZ9mIjfQQb4h/wBYl2/q1rFffWoTZ8OZqW4nIbLKtsPd9fiLW2ss
                              62J9g1S1DtYx48iegiSACcUnnDz5d1S29PWpJONDus+C6pOPw3H3FRCVHnvAX5VPjj7Jb6ZucicL
                              zzkqU0O3bhpsMCnX312YTkc+y9Bup4qTozwuyEWQ4GNjS52DXfo9OXKPm7V2m5sC4G6jThi73h9Y
                              iT9HlXbjlxDKBomXRNRNo02+Ll0qnn1OvY9bHc+tRMivISD86Llw8ifarbNub6Mx4zhCRj5detQt
                              imM4+rexa0xLIw43LbFnICqltwqllfEufOuPf+OjCcfQ9pvVtFlWm4DLjwoicQQwS/Ml/ZXjb47d
                              foY6cu0KdIF+QioYIrao53VrznRMhCWqIYvuNQjHiMEoqqkTjba/lbO8P6VYy0cae1TKQAknanHA
                              PmEqC8MgCT80dpfq1bXPaeV6Ce1HWtuvNyX0aeZEwOHBVpBIPeil3q78L6L4sT1jqpqLGcBu4zH3
                              3G1wJAOOf+0X/Gi/hvHjDruc6bcFeuAv8NOe5w1Ml/SHkVRyyi+rHkWUAWg2LFIQa81Va47VecH9
                              k2MxGzCUI+3iDw67dKO38WfHYyoLKAt3rgREK/q10OY56U0AIv4ZNok9TiOd39WhiUEhwhRz8Jvo
                              HVNz5D/W3eH9KnB1ozzvS7PtqXqtqZKXvL2UBJRQP6NLi+R/6vvoI/rVQHIzsdFNRfkIO1egl9ii
                              RfrU/QcSQCgCtypLibeuwv8AzUwGuT+p99UVJbIhzuXdmkLXuM6XVkazhHt4r4VaWgOobitqCSBW
                              gGTVxHFy6hfCi3gKIn0TIEC+3FQ+wIclopBK87uynsrj35ujALanXYy60gGuPWQcpXk7c669cZhN
                              iONvK4vMV6Klbjl6UzjO9TxzV0/RiBzHi4Y80SujGuaxQ2C5SNP3Zp1o0bXciOI81uJf451fHLiV
                              ntven9QO3iIDosNqK9FNUAU/q1eEosjT3EPJyilf7IE4bfyxWhKkFAcZDho3ILblI0ZtW20L8pR8
                              f6VDOmIN9uENXQFqNCinnDbQ5TctLYPIM31JD6Gav7N/PcheKmhKCpLbjLjjhpyxjZ6y/Ku/BDMG
                              X58xaflSGmWxUcNgXX411a/SOQAubqyY5NvbnHOibi5IKfsq0qXFE7p6FKaF55GkEEwWR61vnxvo
                              MXPTEVuey0iqCGmCAEwKL7qvci5RcxdKxGG1e3kJp1Em+n30lvYWYdE1gtxWqVlgW3OCm4MjjAVP
                              t6eYNW07dUdUCYaA21VCb28uJ/hUt86rg1G13g0isqxFcNRQQJG+ZCPuryd2DqwvGg6YNp5shlnt
                              Bw1LOO8Ncniv0VwkjLJByXp5iRCH/rLLotOL8PCf61ZdXPxq6J6y2x96far/ADLa6ALyfDKGS+R7
                              vF78kVbMfFNiXaV2mAxIffv6Q5DxL3JcdB2r8yPcGfzqpLw2LFJcq6XeQco5z0tteiA5u2gnvpLl
                              VscUi3RIM9ERtkx9vE8X9iufKq4zi4ttpOI6CHIy1lEUU5klTreD5hGGoyCLbRqHJd+77ttd2lDb
                              +H0koquGFogo0viFwnRz+UPerocpyPcRIEyxaVQQxgjdJS/O71AKSe+rmWYlsypblVp1/u/m97+1
                              ThMZuso1XbGt4GRd4cEW4/reLul+lRAmNTri7ujGxGFN+7iKJESp+V3u8P5VWakDOuCcjehM8RPG
                              24pdPyt1bxiS01cjyf4XdHPkMlvH63OmAm7g/WGnDucevu+WK0FJx0FCTgYLpuqYcRZCKraLGwHS
                              gEKLvk2wvxoBCuufiTNE9i7OVKchweSpnrXPmbXHXRIAyQCWRRE71eZvdOEUFytL0ppx9s2tyYw2
                              Lhbl/Vrgy/8AaqY3jO9T2YoyIj7oI0RKioi8+fspsf8AT96BbnbXhUuAYlt8PPpXRCUJXm1cV4/o
                              CLH1C6VSVOrDTN+ullfRh0XyZVeQg5jl9lXwv+pX8a3aLqNwhCscTYZPqJcyWnlieSe5PZjMlFj9
                              xSTCn/lTEt4HJV+mNMqLq7W1PYg56++mxZ1Vlfm5RC7INRAOXXNMznYobjfHJIkgyW20dPOwk5iP
                              tL633V1ab1PKcoL1S7bZoIEuTvbVMAu3qPKuyVLKcB82Za45ChO4Ek5JtLy+VPCWdUM7UohvYhRR
                              HYmcL508kov4EpE27T5HppPqPARFAE5rVOxPghianl7QZntIqY77iFyL7qW00nRbHvsOSrElDESI
                              SQVUvVWkuXDyCnTl3GMbbUSSKCgoeM+/pU8s2ytJsN9N4y4MxtWyXcIZ6/OuDdOq4ZNE0/c1EBmb
                              hVtxFFwFLHL2++uaTi8vR5D1I0IOBDUWCIdvCPvAVEnGgLXPas5Fiv2Vt1xw93DbbVeKgr9XvVOw
                              MbcGTIeQwcGPv8w29/4Dz6fHzqWWUh5ilxLWcY1dcVwCXqO7xfo/51K5L4LFt2G4yrOC5ee7JfKp
                              1SLu18aIwpmOWXVVBUg8NLD8EcIsAovS2UxjGC2136HNu/EsWxTKi/GDBbs8Uirocv4fFx3f3n4J
                              Y8OyOHeT+rQx0XZBNmLaxTJe8QcAf747acJbBzMoLbbCqZ8wbjNIVAPNnsyEiO+XfzvbYFN396qB
                              LaGB3v8ARZyEuS8Aii10A8iR1FE9Fd5esXUqWAW9fD3vjTAtQcIlLgtFn8rpQHliYb38CN/+alDi
                              Mkabhjwx/wDuZo6HFhmPqxFz/txpDkEw+O7icEUHzGQNTaRtIPAYrkd3WuPfs46NcMg8iApGiL7l
                              GvH3bu3jpuKNcXxKMQiI5X2JilxpAjOZjELiuud5RVFHHSrY4hnt5tPCcdWO7u/NXC1WQlA8iS60
                              DlvVxcH5kOMqlNIVUrFlsqaNuoBEuULHSnxvCCG1aynWpwW5DqK2XljklVwvS2dHtvvttuxoIYQ1
                              FFwq1WJZRMm22Lc4ARVTa4ppy64oZIy/W2nLtAafCFuEAVR7q4zTT23jLyS+XJ4Yj0p1xXSwQond
                              T9LP7q6dVTyxFkCwRgMQJwjwGxN37a65alYYk6I4r6tNj3R5mKjyFPaq/wCVWxLceqBzs2edkOuE
                              wOBJVRFHcSiPn99bE6hudnkls1BtoFX2e2tZZ1aWrszyw87Mj80RFFB+ef3VlGKfF0LLYDesMS4X
                              c727nWdUxx6mv6Uif9XD0V8Q2mIphELzqdUx19V9sbulpmg0iE57VBK59ntWauNZ0TEvk41iG26L
                              T65wRdK5Mrw0x4KLnd42j7c+IPOPSnC2oB+r7ana1mTdvvN1nldJJkauc9x+aVHLJSRbxYvoQOFw
                              xAVHuCKYx7FqNvVccXGlWQ5kkMQXqap+6pmiSxsb2siztz6wJzrOngqsqSHo6uG4rhcs5pe8UWLz
                              MfchEGdyoid3cNd+iuXf+HlWCjZIUhULl3Rintrpch5kYQLxRkAypeLc33i/NoB4OEQbUTeO0u6X
                              dxThLZWIagLpTmW1/pEUVH+1QDrBYIXUdmqq82jF4hFA/K71ECWEloM7X545/K3f3quC0dymEl3J
                              BTp3h/8APTAVmkdscoyv9agEi3ELGENFXy3UBxxqMWOI257qb7CONx4aCmyM97+VSyyikKWNHPGI
                              6/pVPLOKYmjiRgTCxmvjtrk2/Ijpx1w2RI3gW0BUTyVOleVu39/FsdZs5O1EQyBM/Vrjl6rVROuD
                              bZL3hNE5YRarORPKcUUl5qWTgslksJ3a7cecSygemNkDytuMmKfVUOSfOqYxLJQ3HTzEwyXGTPCp
                              hOlNSg27WWfHko6i8QULabZp4dv1fdzrDS/6qlFVFUaAiIT3Gih4TpsW/pTV4mQnBfZPBJ76slli
                              NdPa7beUAlkguYTaWeRr7qaF5xcXGSxc21F5xt1TUtvLPWnxnWwJzNLx4cg5TTKKhdMpVccuFyiU
                              zbxbFHGo4Aq+xKpNnEbidt4G7IeVYRuY6OdB5V2459JliiS7VMbU33DAQbAidQE5IvqjVJep5Q25
                              FcGQJm0Abe7t25QjL3fKtLyrKBEeamOvE+BAI+DhVuSngQDgSuEjqhxk7xInsrk2Xikx4lfgJiQR
                              G8OE+FQu3ik9JNo0Ywk5JqCnCb6qtRy2203eiCZcYlpNEgIKv4UVNE6fCpXIBJYU2ae64ugY7tyI
                              i5+VRyposhiMuKontbAfDletSyvVMYhHFR94+AyRAK4THlUqocYs0ySSofHcTPdDb3R+WaWqRbw9
                              PG07xHiJRH1dmM/fU7TxfRJBwW+E23tT3M5z99LKOHXJsR4VUozgvF1dUBFPvrv0ZI7cfRDMpFdU
                              Y7UhDRNuUfY/vD4K63CcGNNd+jaRnPrB9GKUwONlsw2rjIEO4VIU3bV5UG5xJadVdqBc2nS8mSiC
                              P622gp5qSKC6CSmEJSXciws4+wariFmzEuhFvCAT+A3h/oO3n+RkfBT4hKC2395OLHtcx0C6Ezai
                              2/2auF8j8hF/GNKq9ExScDxux3ETjPKi+1G60GlOJ/2l/wCQ1z/ZwHmGRNUEXSVPbU7mpynnkYiI
                              qcRVJOqVw7tjr1aTEG1XO5oTs8yabbXAqHhL24+yvJ2/I76d2rVw5NthRTWMI5x62OdclvVMsQpc
                              W5SP5aacVtM5Mxz91UwvpDJTHaDkqXFF0c4x/o+arO9Tr0e1RYwqrsZ5CDyxt611zJPI48jJRtyS
                              e8XQTWrY1GwOzI4cFdw1TG0lUb8MVc3kWc55Y6ZqkSvoNXGytOG5KbTB7+fKtk6xW3LT7bsQwGPl
                              V59aoopJFoKIjbzjhqLRdK2Mp5i8z4UnhsubhNdwIvPlTQQSW/VkeQyjE5BGQob8bM0zVs2wTkbi
                              ivePrSzqV9p0ZeEAEviTqnsrsx2znGcKkNtyQMD6OL0/I9lUm5niZkQye2KJ+Fzf0+6t+4cOejI4
                              5xPSNi/V+tS3dQQNrfYdR7Z3V86ldnQsFdZhcNCeEy3bSRPVX2VK+y9RnLq+2OyOItAvkNLWw1wp
                              L7ako/Sucwz7PbSWHlIZgyUNGEXBes5jvLSVoni6bOYg8IRRfWVVqWc4rF7G0tHjAimQqX5vSoZH
                              iV+CW207nzxyqNq0MOx2kTG9Uz9VameKqdDVwRF03Ez0XdST9P4oLacTPBYIdqqi5rv0o7Z6PNxm
                              +aYFcl4S8S/lV2OLh0YgHsA/RTXkO4jFV/tU7E1iGbY7W05ef06bdn5NMbnEggeBtoZHCVhS8Tjg
                              kQ/mkJUJ39OthMdNUGNHVVJD3L6361VxYdBt4srIYYJfaiFv/tVTEPOW2RMJMsvETYoJEIlhauBj
                              tBUPDTg/BpKjhnk3yOCJKexN/wASaptmYk66HFac3oSL+cNeVt28vp1atPr2WTj0pVZbygr4tg9a
                              4NvyfTt1aZFpZtKi+8JEhuiRZVFXpXBlvrpmPB2kFlgBbWOIsJ1Redc1nTwMaojtCJG3uDd1wtEn
                              C2s1nlJ4+QjoaKuN27aX3VTBz5e6ZWS6CpwwVc9eddOPtGoUu4PyFIT4SCnVFTGaviWq8wFW1XuL
                              9Xb51eOehi8pKZc9NgubiDG5vHjq0TyREuUa4wX32HEFwe6TS+IVqsSqu2hsISLbuppGK2Y36U+L
                              ba7Ubx4qsOqi4tNqDgKPJUyvvoHVTFgcVppwwRtPF+VQdEuLHBdJ0ScFOIIhgsd2gLy16lWE0Tb4
                              kINrjcS9aJOs7FpG1W3MIBFtUFeqINNIPKRex3or+ESUCEXRM08hbnDrzzEUcE8JY9lNJwecRRvE
                              CHIJUdB0nE4mMefnThHut1kXV1yPGFG2lTKKNTsCTa4LjkRmQY7thCm1fEtLQJIdnA/oyDOPOp0L
                              hqyxVVVRREkDairWX8Zibt1najvKribty56YqV/T4iWOIH9Epi2nvqWXpaek45EdoUbBA5eYedQy
                              p4rp8hsGSVRDKeW2o5L4zoUcutvN0mTkLuIti7AQ8f1an2HkVkp1gXHJLBKRrjBE2ZLUenN2+W4s
                              lRMSRMciUdo1fXmKvnGDeFXkBDb9XaPP+tn91eljucFx/pCQtzoE60SJjcpNcy/tV0ROzqYMOMWx
                              tOKa7ccov9rvU7DjARBNr0QhV3i+FxrbiguRSBDyX04oW9dyK0S/2aaEs6kxwZEF4bqi4aqu1QMc
                              fpU+LOH8RRJUcuLcZfq8Nwq6PKGFrTbaIrvUPrER5qezdjgbXr6aJ6Kh/QMDIyqF3TIvlXk7/mvS
                              16PaKJOlK4rqY4h8k80+NeLu+Rb+O+apIv4NseuBgjBEgkaZVPqc+dQ15Wwt2SNf0vawgQRUkyXL
                              aXSn8S/bD9xVTbJs2G1VOnKk4y7QVfIzq45e2tk4TLPrPr/aFdU1SSQqvRVDdiu2Y+kregiZKnQV
                              4TiruDP/AFfH7qeTqdoZlXQOKu4QXHup8cWdRX5rRLwwlcJd27x7RKuqYoUy5IEhw2O1V8SiuFq0
                              xRyDV9eeiSwnRUQBXuqop1SqyFtMxX/TlNCNGnGx3NbvP300hS3DdZ4gyeiDyWm4FLOZJGVeM02u
                              4yqrmjgNOOMJt3l6vKsCvuSPS2mnAj7AFzduIsqVLIKrZrxiRIaZAfqrVZOl7TDVwficQ8gaAm7u
                              l5J508xYuo0yXFjfROmLm3hoRdBIv/SqTHpSokibJloy46Tn1iLqtZZxsWbtokNKL0QNytluUk8W
                              zz/dS3Lh4IrC24QIYtrtMcJnlS3LrRNBAwgKO3AKfcT9tJWydEFtaNdvDTcnktKPFei9HYJRewvs
                              rL+Mxh4xacLKNCA+Qj40qWU6pjDCKHpWx+M+Rh0cLw8658pxfF24S3mgV2OQNr9Xpu+dQyh4Gp8t
                              24C4ktSID9QSFEqVXxnVMQo0CtuQxKP0HJcQql7NPSEpNKRNoYtivqqzzqdi3UhiJwxEmY77v1dv
                              8DSzOwXw/onhxEetaSHwcFV9RG3FNK7NWxx5SooRLeGwSbQi2cyIzRV/3dejpy6jcS2ktyEW6DJQ
                              Vx3SdH/y10IWcWTR28Gm+MEvhj3RUHGvs8NEnWFtyI65RW5Zj57uHtX51sbzyPCUQhMgZebbTIr+
                              KXH30+LPA4++y2aCPppoif6oUx+tXR5QA57t43rw10ue1M5/6Q6/7uuH5Dt+NDbnbuDSJt0oaZ//
                              AJD/AJdeJvenh+Gy7co4k24mkj3bkyv4R6/7quKNtos09/KKhW8fSA0KZEaYT/pREx/uapjI59ot
                              H+VskeI2Idn/ACFMf/FE/wD0U9x44+m5f8r4Hm8n2c80T/5v1/3FP9ck6Oq6V/KqadMg/mAQ+9Lt
                              /wAmiYymloeuH8oxtx1SHRW3n/8AMf8AlV0Y4yjKhq8dvvHEk/mnt/8A9+f/AA6tjrhbQu92rRZI
                              mX82Caxj8XcDH+7XVOUlqsndojSsoC2LvOdT9J739iiROqRnXzqyl/6O6f7b/hq2MTt6ana8PBCV
                              rFxvpscd3J/ZppjwmSvka0lx0bdjRAb2bcIhZ/dT4wqWvaC7KiK29bMj/wDX/wCGmmIMzteb7ejY
                              2kQ4GNqo9/w1vGydRmtbobKH+DMEKYzx+v6tYw5J1Yj7W07dyRUX8bn+7RAqPw83L3NuRnsbz6P/
                              APD7qqRVLeXW5yxmW8AqiK7i3LinCwXUkw7m4yTYKAOCiJT+IXDeqwCKTQ28k2LjKP8AX9WssC5t
                              OvdgtCVp3ISChfT9eXXw1G4nWcPtKii7K4enSDJgg7ZaJt5f/TpeRuJWnu1VUikp2UiRHNuFlJ/+
                              up2HnsSxe2kIw4DS+V//ALv/AC6Sm8TjvbU2+imelvB/33/l0ExxdDtZjmzxk06+BY57LjhF/wB3
                              SZRXGcRrh2wuE2INWMwaFMbVlCSr81bqGeK0RG+1ckz6RZ3nRXy9OUf7lc+UPDUrtTh8PP8ANg1x
                              7bga/wB2o2KI49r7LqKLemSDCJ1moX7W6XjZXv8A2nbpCl+AGkx7Hv8AhpbFPJPZ7UmlA1dsTxim
                              OXpyJ+xus8Z0q1s3bmFvlcINLEQqmEzP6f7umk4L+JsvtiYd2gGmnW3FQnVcG4c8Jjl+L99d2muf
                              PFVn2zuMqjLVmkoI+24Z/wDDrujkteTttkgKIlldX4zs/wDh1oxPx+22S+Sj+BDHC4/97T/9dEnD
                              ccTtxAXXQc0sThOZySz+n+7pozKHE7a47+XXNJZJf+/f8urY+08q/9k=
                              " id="image1" />
                      </g>
                    </svg>
                  </div>
                  <h5>
                    DOG WIF HAT
                  </h5>
                  <h1>$WIF</h1>
                  <div className="d-flex justify-content-center">
                    <div className="about_best ">
                      <p className="mb-0">BEST OF THE BEST</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="bg_check">
                      <i className="fa-solid fa-check text-white" />
                    </span>
                    <span className="best_para">WIF isn&apos;t just a cryptocurrency; it&apos;s a symbol of progress, for
                      futuristic
                      transactions, a beacon for those who think ahead. It&apos;s clear that the future belongs
                      to
                      those who embrace innovations like WIF, transcending boundaries &amp; paving a new era
                      in
                      finance and technology.</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center align-items-center my-3">
                    <span className="bg_check">
                      <i className="fa-solid fa-check text-white" />
                    </span>
                    <span className="best_para mb-0">literally a dog wif a hat</span>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <button className="buy_wif_btn">Claim $WIF</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <div className="dox_box brd_clr">
                  <div className="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="dog_img" enableBackground="new 0 0 1920 1920" viewBox="0 0 1920 1920">
                      <path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2" />
                      <path d="m959.8 731-539.7 245.3 539.7 319.1z" fill="#62688f" />
                      <path d="m1499.6 976.3-539.8-895.6v650.3z" fill="#62688f" />
                      <path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75" />
                      <path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2" />
                      <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f" />
                    </svg>
                  </div>
                  <h5>
                    ETHEREUM
                  </h5>
                  <h1>$ETH</h1>
                  <div className="d-flex justify-content-center">
                    <div className="about_best mt-3 ">
                      <p className="mb-0">???</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="cross_mark">
                      <i className="fa-solid fa-xmark text-white" />
                    </span>
                    <span className="best_para">12 transactions/second</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="cross_mark">
                      <i className="fa-solid fa-xmark text-white" />
                    </span>
                    <span className="best_para">2.1+ billon transactions</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="cross_mark">
                      <i className="fa-solid fa-xmark text-white" />
                    </span>
                    <span className="best_para">chain not used for $WIF</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="cross_mark">
                      <i className="fa-solid fa-xmark text-white" />
                    </span>
                    <span className="best_para">not a dogF</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center my-3">
                    <span className="cross_mark">
                      <i className="fa-solid fa-xmark text-white" />
                    </span>
                    <span className="best_para">no hat</span>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <button className="buy_wif_btn">Claim $WIF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* two video part  */}
  <div className="listen_part">
        <div className="container">
          <div className="row my-3 justify-content-center">
            <div className="col-md-6">
              <video className="w-100" controls autoPlay loop muted>
                <source src="/Assets/wif2.mp4" type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg"> */}
                Your browser does not support the video tag.
              </video>
              {/* <iframe class="w-100 crput" src="https://www.youtube.com/embed/5aR-BGI6zs4?si=mfEcFvFGVKDJuHK_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className="col-md-6">
              <video className="w-100" controls autoPlay loop muted>
                <source src="/Assets/wif3.mp4" type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg"> */}
                Your browser does not support the video tag.
              </video>
              {/* <iframe class="w-100 crput" src="https://www.youtube.com/embed/5aR-BGI6zs4?si=mfEcFvFGVKDJuHK_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              {/* <iframe class="w-100 crput" src="https://www.youtube.com/embed/zzWfUlVwweg?si=U-2I7rawEEcbI3gN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
      </div>

      <div className="wifthe_best">
        <div className="container ">
          <div className="row justify-content-around">
            <div className="col-md-3">
              <div className="revis">
                <h1 className="reviews">they took a dog and put a hat on</h1>
                <div className=" d-flex  gap-1 justify-content-end">
                  <i className="fa-solid fa-star text-white" />
                  <i className="fa-solid fa-star text-white" />
                  <i className="fa-solid fa-star text-white" />
                  <i className="fa-solid fa-star text-white" />
                  <i className="fa-solid fa-star text-white" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> */}
                </div>
                <h5 className="name_as">-ANON WIF HAT</h5>
              </div>
            </div>
            <div className="col-md-3">
              {/* Slider main container */}
              <div className="swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide"><img src="/Assets/dog.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog1.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog2.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog3.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog4.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog5.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog6.webp" alt="" /></div>
                  ...
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
                {/* If we need scrollbar */}
                {/* <div class="swiper-scrollbar"></div> */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="revis">
                <h1 className="reviews">I DON&rsquo;T GET IT</h1>
                <div className=" d-flex  gap-1 justify-content-end">
                  <i className="fa-solid fa-star text-white" />
                  <i className="fa-regular fa-star text-white" />
                  <i className="fa-regular fa-star text-white" />
                  <i className="fa-regular fa-star text-white" />
                  <i className="fa-regular fa-star text-white" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> */}
                </div>
                <h5 className="name_as">-NOHATTER</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wif generator */}
      <div className="wif_genaot">
        <div className="container">
          <h1 className="gat_gen">WIF Hat Generator Coming Soon
            ;)</h1>
          <div className="row justify-content-center my-5">
            <div className="col-md-6">
              <div className="swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide"><img src="/Assets/dog.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog1.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog2.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog3.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog4.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog5.webp" alt="" /></div>
                  <div className="swiper-slide"><img src="Assets/dog6.webp" alt="" /></div>
                  ...
                </div>
                {/* If we need pagination */}
                <div className="swiper-pagination" />
                {/* If we need navigation buttons */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
                {/* If we need scrollbar */}
                {/* <div class="swiper-scrollbar"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* footer */}
       <div className="footer">
        <div className="container">
          <div className="soical_icons d-flex justify-content-center gap-2">
            <div className="ss">
              <a href="https://t.me/dogwifcoin" className="text-decoration-none"> <span> <i className="fa-brands fa-telegram me-1" /></span> <span>telegram</span></a>
            </div>
            <div className="ss">
              <a href="https://twitter.com/dogwifcoin" className="text-decoration-none"> <span> <i className="fa-brands fa-twitter me-1" /></span> <span>twitter</span> </a>
            </div>
            <div className="ss">
              <a href="https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm" className="text-decoration-none"> <span> <i className="fa-solid fa-file-contract me-1" /></span>
                <span>contract</span></a>
            </div>
            <div className="ss">
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx" className="text-decoration-none"> <span> <i className="fa-solid fa-chart-line" /></span>
                <span>chart</span></a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Site;
