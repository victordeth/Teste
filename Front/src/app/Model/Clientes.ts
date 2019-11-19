export class Clientes {
    id: any;
    Nome: any;
    Documento: any;
    Cidade: any;
    Endereco: any;
    Complemento: any;
    idLocalizacao: any;
}

export class DataReturn<T>
{
    status: string;
    data: T;
}