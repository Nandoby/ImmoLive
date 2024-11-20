import React from 'react';


interface MyComponentProps {
  children: React.ReactNode;
}

const ContainerCard:React.FC<MyComponentProps> =({children}) =>{
    let nbChild = React.Children.count(children)
    const gridCold = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-`
    return(

        <div className={gridCold}> 
            {children}
        </div>
    )
}

export default ContainerCard