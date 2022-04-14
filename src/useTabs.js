import { useState } from "react";

const useTabs = (initialTabs,allTabs) => {
  const [curIndex,setCurIndex] = useState(initialTabs);
  return{
    currentItem:allTabs[curIndex],
    changeItems:setCurIndex
  };
};

export default useTabs