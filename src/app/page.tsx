import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {Filters} from "@/components/shared/filters";
import {ProductsGroupList} from "@/components/shared/products-group-list";


export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text='Все пиццы' size={"lg"} className='font-extrabold'/>

            </Container>
            <TopBar/>

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[80px]'>
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>


                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList items={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]} title='Пиццы'
                                               categoryId={1}/>
                        </div>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList items={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]} title='Комбо'
                                               categoryId={2}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
