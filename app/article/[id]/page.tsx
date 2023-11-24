type PageProps = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

async function getData(id: string) {
    const res = await fetch(`http://localhost:8080/api/v1/articles/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({ params, searchParams }: PageProps) {
    const data = await getData(params.id);
    const post = data.data;
    return {
        title: post.title,
    };
}

export default async function Page({ params, searchParams }: PageProps) {
    const data = await getData(params.id);
    const post = data.data;
    console.log('id')
    console.log(post)
    return (
        <>
            <h1 className="mb-3 text-2xl font-semibold">{post.title}</h1>
            <p className="text-sm text-gray-900">{post.date}</p>
            <br></br>
            <p className="text-justify">{post.description}</p>
        </>
    );
  }