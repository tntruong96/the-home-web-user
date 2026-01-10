type TBaseDataResponse = {
  documentId: string;
  createdDate: string;
  updatedDate: string;
};

type TMedia = TBaseDataResponse & {
  name: string;
  id: number;
  hash: string;
  sha256: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  related: [];
};

export { type TBaseDataResponse, type TMedia };
