import styled, { keyframes } from 'styled-components'

export const op = keyframes`
    0%{
        opacity: -1;
    }
    100%{
        opacity: 1;
    }
`

export const Repositorio = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    border: solid 1px #21262d;
    border-radius: 5px;
    padding: 20px 20px;
    
    transition: all .3s ease;
    animation: ${op} 2s ease;

    :hover{
        transform: scale(1.03);
    }
`