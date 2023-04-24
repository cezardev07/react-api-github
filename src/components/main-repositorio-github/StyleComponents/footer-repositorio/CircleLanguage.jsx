import styled from 'styled-components'

export const CircleLanguage = styled.div`
    width: 12px;
    height: 12px;
    background: ${
        langRepo =>
             langRepo.props === "JavaScript" ? "#f1e05a"
            :langRepo.props === "Python" ? "#1c8ee0"
            :langRepo.props === "CSS" ? "#4b1c92"
            :"red"
    };

    border-radius: 50%;
`