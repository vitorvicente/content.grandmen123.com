import styled from "styled-components";

import Row from 'react-bootstrap/Row'

export const StyledHeader = styled.header`
    text-align: center;
    position: relative;
    
    & h3: {
        font-weight: 500;
        font-size: 36px;
        color: #283d50;
    }
`;

export const StyledRow = styled(Row)`
    padding-top: 60px;
    
    & h4: {
        font-weight: 600;
        font-size: 24px;
        color: #283d50;
    }
`;

export const StyledImg = styled.img`
    border-radius: 20px;
    text-align: center;
`;

export const StyledSection = styled.section`
    margin-top: 60px;
    marin-bottom: 40px;
    padding-top: 30px;
    padding-bottom: 10px;
    background: #ecf5ff;
`;

export const StyledCard = styled.div`
    background: #fff;
	text-align: center;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	margin: 0 10px 40px 10px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	&:hover {
	    -webkit-transform: translateY(-5px);
		transform: translateY(-5px);

		
		& h3 {
			padding-bottom: 20px;
			padding-top: 20px;
		}
		
		& a {
		    text-decoration: none;
			color: #007bff;
		}
	}
	
	& h3 {
		padding-bottom: 20px;
		padding-top: 20px;
	}
    & a {
        text-decoration: none;
        color: #000;
    }
    & p {
        margin-left: 20px;
        margin-right: 20px;
    }
	
`;