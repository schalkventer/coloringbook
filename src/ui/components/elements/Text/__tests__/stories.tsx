import React, { Fragment } from 'react';
import {} from '@storybook/addon-knobs';
import Text from '..';

const paragraph =
  '**Eiusmod exercitation aliquip sit id ad**. *Reprehenderit sint sint proident ad ut*. Proident ad ea proident qui cillum ex elit ut non. Laboris velit eu labore consequat pariatur cillum sint ipsum cupidatat velit consectetur veniam. Labore laborum Lorem est veniam.';

const full = `
# Heading 1

**Incididunt officia nulla sunt laborum [anim cillum](#) exercitation**. *Aliqua pariatur adipisicing veniam deserunt do sunt*. Et elit cillum irure ut velit Lorem pariatur. Et Lorem aute officia elit incididunt sunt culpa consequat labore culpa in ad. Mollit aliqua anim magna cupidatat adipisicing anim laborum mollit tempor. Eiusmod eu eiusmod irure consequat do magna. Enim consectetur adipisicing sit ex aliquip laboris eiusmod ut.

- First
- Second
- Third

Ut nisi officia adipisicing ullamco qui ex eiusmod esse reprehenderit id et mollit. Laboris sint ea deserunt ullamco irure ullamco adipisicing ullamco. Ut ex aute id consectetur in qui irure Lorem in amet ea pariatur velit. Labore amet do occaecat anim nisi duis ea mollit nostrud exercitation elit consectetur. Nulla officia nulla in mollit aliqua.

## Heading 2

### Heading 3

Exercitation do nisi veniam aliquip deserunt laborum id exercitation excepteur in. Anim anim irure velit culpa. Anim cillum nostrud deserunt commodo eu ex occaecat eu occaecat Lorem dolor quis ut laboris. Labore dolore cillum sit ad elit tempor qui culpa ut. Lorem laboris sunt officia cillum sunt dolor sunt. Qui adipisicing do aliquip est ex. Ut officia nostrud consequat dolor amet dolor commodo cillum.

Consequat commodo nulla pariatur commodo in labore ex enim duis incididunt excepteur anim. Ex nisi exercitation deserunt commodo nostrud ut anim excepteur eiusmod nulla fugiat amet. Lorem consequat reprehenderit ad voluptate aute esse adipisicing reprehenderit. Enim amet nisi ea excepteur ullamco.

### Heading 3

Labore magna officia consequat do. Non velit aliquip occaecat amet. Labore pariatur id veniam cupidatat ipsum veniam veniam esse proident. Non deserunt consequat adipisicing est duis. Tempor ipsum enim minim exercitation.

Do ullamco ut pariatur magna. Consectetur nisi est ipsum excepteur laboris incididunt. Ut mollit dolor exercitation amet. Cillum tempor officia sint eu culpa tempor dolor ullamco incididunt et ea. Duis sint minim pariatur aliquip aute excepteur cillum aliqua do. Cupidatat incididunt sint pariatur aliqua aliqua laboris elit eiusmod ut ad cupidatat irure enim dolor. Anim ex do ipsum dolore.
`;

export const Demo = (): JSX.Element => <Text>{paragraph}</Text>;

export const Default = (): JSX.Element => <Text>{paragraph}</Text>;

export const Types = (): JSX.Element => (
  <Fragment>
    <Text type="blurb">{paragraph}</Text>
    <hr />
    <Text type="document">{paragraph}</Text>
    <hr />
    <Text type="fineprint">{paragraph}</Text>
    <hr />
    <Text color="blue" type="blurb">
      {paragraph}
    </Text>
    <hr />
    <Text color="blue" type="document">
      {paragraph}
    </Text>
    <hr />
    <Text color="blue" type="fineprint">
      {paragraph}
    </Text>
  </Fragment>
);

export const Links = (): JSX.Element => (
  <Fragment>
    <Text>[External Link](https://google.com)</Text>
    <Text>[Internal Link](/internal)</Text>
    <Text underlines={false}>[External Link (no underline)](https://google.com)</Text>
    <Text underlines={false}>[Internal Link (no underline)](/internal)</Text>
  </Fragment>
);

export const Truncate = (): JSX.Element => <Text characters={100}>{paragraph}</Text>;

export const Full = (): JSX.Element => <Text type="document">{full}</Text>;
