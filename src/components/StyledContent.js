import styled from 'styled-components';
import defaultImage from '../imgfolder/room-11.jpg';




const StyledContent = styled.header`

min-height: 60vh;
background: url(${props => 
(props.image ? props.image : 
defaultImage)}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;






export default StyledContent;