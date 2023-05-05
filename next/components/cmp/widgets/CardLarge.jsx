import React from 'react'
import ExportedImage from 'next-image-export-optimizer'

function CardLarge({title, img, content, linkRef, linkText}) {
    
    /*
    function resizeCards(){

        var highestBox = 0;

        $(".height-card-body" ).each( function () {
            var star = $(this);
            var height = star.find("> div").height();
            // If this box is higher than the cached highest then store it
            if(height > highestBox) {
                highestBox = height;
            }
        });

        // Set the height of all those children to whichever was highest
        $(".height-card-body").height(highestBox);

    }//*/

    return (
    <div>
      <div style={{padding: "1em"}}>
    <div className="card">
        <ExportedImage src={img.src} width={img.width} height={img.height} layout='responsive'/>
        <div id="card-body-1" className="card-body height-card-body">
            <div>
                <h3 className="fst-italic card-title display-6" dangerouslySetInnerHTML={{ __html: title}}></h3>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: content}}></p>
                <a className="btn btn-primary" href={linkRef} dangerouslySetInnerHTML={{ __html: linkText}}></a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default CardLarge