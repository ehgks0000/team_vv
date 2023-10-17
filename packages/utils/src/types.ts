import typia from 'typia';

export type CreateHelloDto = {
  name: string & typia.tags.MinLength<3>;
};

export type CreateHelloReturn = {
  msg: string;
  name: string;
}
