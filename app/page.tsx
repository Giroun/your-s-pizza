import { Container, Title, TopBar, Filter, ProductsGroupList } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250]">
            <Filter />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 16,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
