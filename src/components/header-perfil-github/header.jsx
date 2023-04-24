import { HeaderGitHub } from "./StyleComponents/headerGitHub";
import { LinkGitHub } from "./StyleComponents/linkGitHub";
import { ImgGitHub } from "./StyleComponents/imgGithub";
import { useEffect, useState } from "react";

const Header = () => {
  const ApiGitHub = "https://api.github.com/users/cezardev07/repos"
  const [linkPerfil, setLinkPerfil] = useState([])
  const [linkImg, setLinkImg] = useState([])

  useEffect(() => {
      const get = async (end_point) => {
        try {
          const res = await fetch(end_point)
          const data = await res.json()
          
          setLinkPerfil(data[0].owner.html_url)
          setLinkImg(data[0].owner.avatar_url)
        } catch (error) {
          console.log(error)
        }
      }
      get(ApiGitHub)
  },[])

    return(
        <HeaderGitHub>
          <LinkGitHub href={linkPerfil} target="_blank" rel="noopener noreferrer">
            <ImgGitHub src={linkImg}/>
          </LinkGitHub>
        </HeaderGitHub>
    )
}

export default Header