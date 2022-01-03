import styled from 'styled-components';

export const ImageWrapper = styled.div`
  height: 100%;
` 
export const ImageContainer = styled.div<{zoom: Boolean}>`
    position: relative;
    width: ${props => props?.zoom ? '100%' : '50%'};
    margin: auto;
    overflow: hidden;
    &:hover {
    cursor: zoom-${props => props?.zoom ? 'out' : 'in'};
  }
`
export const ImageTag = styled.img`
    height: 100%;
    width: 100%;
  `

export const ImageIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    fill: white;
`
export const Icon = styled.svg`
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: white;
    background: transparent;
    border-radius: 0.5rem;
`