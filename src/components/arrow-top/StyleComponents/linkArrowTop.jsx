import styled from 'styled-components'

export const LinkArrowTop = styled.a`
    position: fixed;
    z-index: 10;
    bottom: 20px;
    right: 20px;
    padding: 5px 10px;
    font-size: 40px;
    text-decoration: none;
    color: rgb(222, 187, 12);
    transition: all .3s ease;
    border-radius: 5px;

    :hover{
        background: rgb(17, 41, 80);
    }
    :active{
        scale: .9;
    }
`