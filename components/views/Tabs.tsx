import React from 'react';

type TabsData = {
  tabs: {
    tabName: string;
    panelTitle: string;
    panelDesc: string;
    image: string;
    link: string;
    linkText: string;
  }[];
};

const Tabs = ({ tabs }: TabsData) => {
  return (
    <div className={'tabs'}>
      <div role={'tabList'} aria-label={'Accessibles Tabs'}>
        <button id={"nils"} role={"tab"} aria-selected={"true"} aria-controls={"nilsTab"}>
          Test
        </button>
      </div>
      <div role={"tabPanel"} id={"nilsTab"} aria-labelledby={"nils"}>

      </div>
    </div>
  );
};

export default Tabs;
