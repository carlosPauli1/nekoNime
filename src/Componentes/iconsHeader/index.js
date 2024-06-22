import profile from '../../img/perfil.svg'
import shop from '../../img/sacola.svg'
import styled from 'styled-components'

const Icons = styled.ul`
  display: flex;
    justify-content: flex-end;
    align-items: center;
    left: 50vw;
`
const Icon = styled.li`
  margin-right: 40px;
`

const IconImage = styled.img`
  width: 50px;
`

const icones = [profile, shop]

function iconesHeader(){
  return (
      <Icons>
        {icones.map((icone, index) => (
          <Icon key={index}>
            <IconImage src={icone} alt={`icone-${index}`} />
          </Icon>
        ))}
      </Icons>
  )
}

export default iconesHeader