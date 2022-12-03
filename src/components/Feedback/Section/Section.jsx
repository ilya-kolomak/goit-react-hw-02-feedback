import { Header, Title } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
  return (
    <Header>
        {title && <Title>{title}</Title>}
        {children}
    </Header>
  )
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
}