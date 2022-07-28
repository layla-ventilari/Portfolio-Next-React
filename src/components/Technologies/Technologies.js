import React from 'react';
import { DiNodejsSmall} from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import {SiReact, SiNodedotjs} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Web developer, Blockchain enthusiast with interests in web3 development.
    </SectionText>
    <List>
      <ListItem>
        <SiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience eith <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
