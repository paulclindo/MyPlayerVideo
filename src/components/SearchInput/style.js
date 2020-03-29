import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

export const SearchWrapper = styled.form`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
`;
export const SearchInput = styled.input`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  padding-left: 35px;
  font-size: 18px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.gray};
  outline: 0;
  transition: 0.2s;
  ::placeholder {
    color: ${props => props.theme.colors.gray};
    font-weight: lighter;
  }
  &:focus {
    box-shadow: 0 30px 100px rgba(50, 50, 93, 0.12);
  }
`;

export const StyledSearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 12px;
  left: 10px;
`;
