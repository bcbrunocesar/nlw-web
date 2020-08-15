import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetTotalConnectionResponse } from '../../../models/responses/GetTotalConnectionResponse';
import ConnectionService from '../../../services/connections/ConnectionService';
import LandingPageMessage from '../../../infrastructure/messages/pages/LandingPageMessage';

import logoImg from '../../../assets/images/logo.svg';
import landingImg from '../../../assets/images/landing.svg';
import studyIcon from '../../../assets/images/icons/study.svg';
import giveClassesIcon from '../../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../../assets/images/icons/purple-heart.svg';

import './LandingPage.css';

function LandingPage(): JSX.Element {
  const connectionService = new ConnectionService();
  const [totalConnections, setTotalConnections] = useState<GetTotalConnectionResponse>();

  useEffect(() => {
    connectionService.getTotalConnections().then(setTotalConnections);
  }, [connectionService, totalConnections]);

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
					<Link
						to="/study"
						className="study"
					>
						<img
							src={studyIcon}
							alt={LandingPageMessage.buttons.studyText}
						/>
						{LandingPageMessage.buttons.studyText}
					</Link>
					<Link
						to="/give-classes"
						className="give-classes"
					>
						<img
							src={giveClassesIcon}
							alt={LandingPageMessage.buttons.giveClasses}
						/>
						{LandingPageMessage.buttons.giveClasses}
					</Link>
				</div>

				<span className="total-connections">
          Total de {totalConnections?.total} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
				</span>
			</div>
		</div>
	)
}

export default LandingPage;