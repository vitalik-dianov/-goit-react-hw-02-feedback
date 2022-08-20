import styled from 'styled-components';

export const FeedbackButton = styled.button`
  padding: ${p => p.theme.space[3]};
  width: ${p => p.theme.sizes[4]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  :first-letter {
    text-transform: capitalize;
  }
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;
