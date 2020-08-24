import React, { useState, useEffect, useRef } from 'react';
import { GetTotalConnectionResponse } from '../../../models/responses/GetTotalConnectionResponse';
import ConnectionService from '../../../services/connections/ConnectionService';
import LandingPageMessage from '../../../infrastructure/messages/pages/LandingPageMessage';
import LinkButton from '../../atoms/link-button/LinkButton';

import logoImg from '../../../assets/images/logo.svg';
import landingImg from '../../../assets/images/landing.svg';
import studyIcon from '../../../assets/images/icons/study.svg';
import giveClassesIcon from '../../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../../assets/images/icons/purple-heart.svg';

import './LandingPage.css';

function LandingPage(): JSX.Element {
  const connectionService = new ConnectionService();
  const [totalConnections, setTotalConnections] = useState<GetTotalConnectionResponse>();
  const isMounted = useRef(false);

  useEffect(() => {
    connectionService.getTotalConnections()
      .then(response => {
        setTotalConnections(response);
      })
      .catch(error => console.log(error));

    return () => {
      isMounted.current = true;
    }
  }, [connectionService]);

	return (
		<div id="page-landing">
			<div
				id="page-landing-content"
				className="container"
			>
				<div className="logo-container">
					<img
						src={logoImg}
						alt="Proffy"
					/>
					<h2>{LandingPageMessage.title}</h2>
				</div>

				<img
					src={landingImg}
					alt="Plataforma de estudos"
					className="hero-image"
				/>

				<div className="buttons-container">
          <LinkButton
            to='/study'
            textLink={LandingPageMessage.buttons.studyText}
            linkType='study'
            imagePath={studyIcon}
          />

          <LinkButton
            to='/give-classes'
            textLink={LandingPageMessage.buttons.giveClasses}
            linkType='classes'
            imagePath={giveClassesIcon}
          />
				</div>

				<span className="total-connections">
          Total de {totalConnections?.total} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
				</span>
			</div>
		</div>
	)
}

export default LandingPage;
