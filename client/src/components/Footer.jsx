import React from "react";
import picz from "/src/assets/valve.png";

function Footer() {
  return (
    <>
      <div id="background">
        <hr></hr>
        <div>
          <p id="rights">
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
          </p>
        </div>
        <div>
          <div>
            <p className="VAT">
              {" "}
              VAT included in all prices where applicable.
              <a href="" id="privacy">
                &nbsp; &nbsp;Privacy Policy{" "}
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                &nbsp;Legal
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                &nbsp;Steam Subscriber Agreement
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                Refunds
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                Cookies
              </a>
              &nbsp;
            </p>
          </div>
        </div>
        <hr id="bottom-line"></hr>
        <div className="about">
          <a href="">About Valve</a>
          <> | </>
          <a href="">Jobs</a>
          <> | </>
          <a href="">Steamworks</a>
          <> | </>
          <a href="">Steam distribution</a>
          <> | </>
          <a href="">Support</a>
          <> | </>
          <a href="">Recycling</a>
          <> | </>
          <a href="">Gift Cards</a>
          <> | </>
          <a href="">FaceBewk</a>
          <> | </>
          <a href="">Twizzer</a>
        </div>
        <div />
      </div>
    </>
  );
}

export default Footer;
