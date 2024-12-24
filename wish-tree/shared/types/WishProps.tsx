export interface WishProps {
    content: string; 
    obj_id : number | null ;
}

export interface Wish {
    wish_id: number;
    writer_name: string;
    obj_id: number;
}

export interface Wishes {
    wishes: Wish[];
  }
  