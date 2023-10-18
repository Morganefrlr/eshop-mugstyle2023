import { LiaTrashSolid } from "react-icons/lia";
import { useMutation, useQueryClient } from "react-query";

const ButtonDelete = ({slug} : {slug :string}) => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:({slug}: {slug:string}) =>{
            return fetch(`http://localhost:3000/api/products/${slug}`, {
                method: 'DELETE',
            })
        },
        onSuccess(){
            queryClient.invalidateQueries({queryKey:['products']})
        }
    })

    const handleDelete = () =>{
        mutation.mutate({slug})
    }
    return (
        <button onClick={handleDelete}> 
            <LiaTrashSolid className='hover:text-red-600 cursor-pointer'/>
        </button>
    );
};

export default ButtonDelete;