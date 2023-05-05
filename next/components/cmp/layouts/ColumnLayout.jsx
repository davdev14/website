import React from 'react'
import { Layout } from './Layout'


function ColumnLayout({items, style={}, ctnStyle={}, cls={}, header=null}) {
    
    const breakpoints = { xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3};
    
    const sliceData = function(items, cols, colIndex) {
        const colItems = [];
        for(let i = colIndex; i<items.length; i+=cols){
            colItems.push(items[i]);
        }
        return colItems;
    };
    
    const cols = function(format) {
        return breakpoints[format] || 1;
    };

    const props ={};
    return (
        <div style={style}>
            {header}
            <div className="layout-container">
                <div style={{display: "flex"}}>
                <Layout render={(width, height, format) => (
                    Array.from(Array(cols(format)), (e, _colIndex) => {
                        return React.cloneElement((
                            <div style={{flex: "1 1 0px"}} key={_colIndex}>
                                {sliceData(items, cols(format), _colIndex).map((item, key) => (
                                    <div key={_colIndex+'_'+key}>
                                        {item}
                                    </div>
                                ))}
                                </div>
                        ), {...props})
                    })
                )}/>
                </div>
            </div>
        </div>
      );
}

export default ColumnLayout