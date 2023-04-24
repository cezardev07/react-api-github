import { useEffect, useState } from "react";

import { ContainerRepositorios } from "./StyleComponents/ContainerRepositorios";
import { Repositorio } from "./StyleComponents/Repositorio";
import { Language } from "./StyleComponents/footer-repositorio/Language";
import { Title } from "./StyleComponents/header-repositorio/Title";
import { Descricao } from "./StyleComponents/main-repositorio/Descricao";
import { LinkTitle } from "./StyleComponents/header-repositorio/LinkTitle";
import { DescricaoParagraph } from "./StyleComponents/main-repositorio/DescricaoParagraph";
import { LanguageParagraph } from "./StyleComponents/footer-repositorio/LanguageParagraph";
import { CircleLanguage } from "./StyleComponents/footer-repositorio/CircleLanguage";
import { RepoVisibility } from "./StyleComponents/header-repositorio/RepoVisibility";

const repoGITHUB = () => {
    const ApiGitHub = "https://api.github.com/users/cezardev07/repos"

    const [repositorios, setRepositorios] = useState([])

    useEffect(() => {

        const getApi = async (api) => {
            try {
                const res = await fetch(api)
                const data = await res.json()

                setRepositorios(data)
            } catch (error) {
                console.log(error)
            }  
        }

        getApi(ApiGitHub)
    },[])
  
    return(
        <ContainerRepositorios id="top">
        {
          repositorios.map((DadosRepositorio) => {
            return(
                <Repositorio key={DadosRepositorio.id}>
                    <Title>
                        <LinkTitle href={DadosRepositorio.html_url} target="_blank" rel="noopener noreferrer">
                          {DadosRepositorio.name}
                        </LinkTitle>
                        <RepoVisibility>{DadosRepositorio.visibility}</RepoVisibility>
                    </Title>
                    <Descricao>
                        <DescricaoParagraph>
                            {DadosRepositorio.description} 
                        </DescricaoParagraph>
                    </Descricao>
                    <Language>
                        <CircleLanguage props={DadosRepositorio.language}></CircleLanguage>
                        <LanguageParagraph>{DadosRepositorio.language}</LanguageParagraph>
                    </Language>
                </Repositorio>
            )
          })
        }
        </ContainerRepositorios>
    )

}

export default repoGITHUB