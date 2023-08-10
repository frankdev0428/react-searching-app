import styled from 'styled-components'
const Subtitle = styled.p`
 font-size: 70px;
 color: white;
 font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
interface Props{
    heartCount : number;
}

const Title = ({ heartCount } : Props) => {
  return (
   <>
   <Subtitle>Total Like {heartCount} </Subtitle>
   </>
  )
}

export default Title