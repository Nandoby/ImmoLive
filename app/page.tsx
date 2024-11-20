
import { Card } from "@/components/card/Card";
import ContainerCard from "@/components/containerCard/ContainerCard";


export default function Home() {
  return (
    <ContainerCard>

      <Card 
        title="villa bord de mer"
        city="Mons"
        postalCode={7000}
        price={300000} 
        img={{id:1, path:"./images/hero.jpg"}}
        isNew={true}
        type="appartement"
        nbrooms={2}
        isFavorite={true}
        
        slug={"appartement"+"-"+"5"}
        id={5}
        />
        <Card 
        title="villa bord de mer"
        city="Mons"
        postalCode={7000}
        price={4000000} 
        img={{id:1, path:"./images/hero.jpg"}}
        isNew={false}
        nbrooms={2}
        isFavorite={false}
        />
        <Card 
        title="villa bord de mer"
        city="Mons"
        postalCode={7000}
        price={4000000} 
        img={{id:1, path:"./images/hero.jpg"}}
        isNew={true}
        nbrooms={2}
        isFavorite={true}
        />
          <Card 
        title="villa bord de mer"
        city="Mons"
        postalCode={7000}
        price={4000000} 
        img={{id:1, path:"./images/hero.jpg"}}
        isNew={false}
        nbrooms={2}
        isFavorite={false}
        />
   
  </ContainerCard>
  );
}
