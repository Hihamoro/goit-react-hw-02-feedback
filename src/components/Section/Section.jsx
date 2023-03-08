import PropTypes from 'prop-types';
import { SectionWrapper, TitleSection } from './Section.styled';


export default function Section({ title, children }) {
    return (
        <SectionWrapper>
            <TitleSection>{title}</TitleSection>
            {children}
        </SectionWrapper>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};