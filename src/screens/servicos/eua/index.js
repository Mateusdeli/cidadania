import Text from '../../../styles/text/'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import styled from 'styled-components'
import {Select} from '../../../components/select'
import {Option} from '../../../components/select/option/'

const Wrapper = styled.div`
    position: absolute;
    top: 1882px;
    left: 390px;
    width: 1140px;
    height: 1200px;
`;

const Content = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 463px;
    height: 506px;
    border-radius: 32px;
`;

Content.Buttons = styled(FlexColumn)`
    padding-top: 24px;
    button {
        margin: 0 12px;
    }
`;

const Title = styled(Text.Title)`
    font-weight: 700;
    &::after {
        content: "";
        display: inline-block;
        margin-left: 36px;
        margin-bottom: 8px;
        width: 156px;
        background-color: ${({ theme }) => theme.colors.primary};
        height: 4px;
    }
`

const Flex = styled(FlexColumn)`
    margin: 16px 0;
`

const SelectContent = styled.div`
    width: 100%;
    display: flex;
    flex-basis: 1;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Eua = () => {

    function RenderDropdown() {
        const informations = [
            {
                name: "internacionalização",
                value: "Internacionalização de empresas e produtos"
            },
            {
                name: "assessoria_migratoria",
                value: "Assessoria migratória global"
            },
            {
                name: "eb5",
                value: "Projeto EB-5"
            },
            {
                name: "projetos_estruturados",
                value: "Projetos estruturados"
            },
            {
                name: "real_estate",
                value: "Real Estate"
            },
            {
                name: "consultoria_gestao",
                value: "Consultoria em gestão"
            }
        ]
        return informations.map((info, index) => (
            <Flex key={index}>
                <Select type="servicos" name={info.name} width="535">
                    <Option value={info.value}>{info.value}</Option>
                </Select>
            </Flex>
            
        ))
    }
    return(
        <Wrapper>
            <FlexColumn>
                <Content>
                    <Title className="pt-4">Estados Unidos</Title>
                </Content>
            </FlexColumn>
            <div className="mt-5">
              <FlexColumn>
                  <SelectContent>
                      {RenderDropdown()}
                  </SelectContent>
                  <Content>
                      <FlexRow align="flex-end">
                          <FlexRow align="center">
                              <Image src="images/shot-two-american-us-flags-high-rise-building.jpg" alt="passaporte uniao europeia" />
                          </FlexRow>
                      </FlexRow>
                  </Content>
              </FlexColumn>
            </div>
        </Wrapper>
    )
}