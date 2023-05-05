import React, {lazy, Suspense, useMemo} from 'react'


function CmpRenderer({elts, loader}) {
  
  const createLayout = (elt, key) =>{
    const Layout = lazy(() => import('./layouts/'+elt.layout));
    const widgets = [];
    elt.items.forEach(w => {
      let Widget = lazy(() => import('./widgets/'+w.widget));
      widgets.push(<Widget {...w.props} />);
    });
    const createHeader = (header) =>{
      if(header){
        const Header = lazy(() => import('./widgets/'+header.widget));
        return <Header {...header.props}/>
      }
      return <></>;
    };
    return <Layout {...elt.props} items={widgets} header={createHeader(elt.header)} key={key}/>
  };
  
  const createLayouts = (elts) => {
    return elts.map((elt, key) => createLayout(elt, key));

  };

  const layouts = useMemo(() => createLayouts(elts), [elts]);

  return (
    <>
      <Suspense fallback={loader}>
        {layouts.map( (layout) => layout)}
      </Suspense>
    </>
  )
}

export default CmpRenderer