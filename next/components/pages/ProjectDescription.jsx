import React from 'react';
import TitleDescriptionStackBackground from "./../widgets/TitleDescriptionStackBackground";
import TextTitleContent from "./../widgets/TextTitleContent";


function ProjectDescription({ data }) {
    return (
        <div>
            <div>
                <div >
                    <TitleDescriptionStackBackground data={data.widget1} />
                </div>
                <div className="container" style={{ padding: 5 }}>
                    <TextTitleContent
                        {...data.textContent.map((item) => {
                            data = { item }

                        })
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectDescription