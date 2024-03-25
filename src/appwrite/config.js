import Conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query, } from "appwrite";
export class service{
    Client= new Client();
    databases;
    bucket;
     constructor(){
        this.Client
        .setEndpoint(Conf.appwriteurl)
        .setProject(Conf.appwriteProjectId)
        this.bucket= new Storage(this.Client)
        this.databases=new Databases(this.Client)
     }
     async createpost({title,slug,content,images,status,userId}){
        try{
 return await this.databases.createDocument(
    Conf.appwriteDatabaseId,
    Conf.appwriteCollectionId,
    slug,{
        title,content,images,status,userId
    }
 )
        }
        catch(error){
            throw error
        }
     }
     async updatepost(slug,{title,content,images,status,userId}){

        try{
            return await this.databases.updateDocument(
Conf.appwriteDatabaseId,
Conf.appwriteCollectionId,
slug,{
    title,content,images,status
})
        }
        catch(error){
            throw error

        }
     }
        async deletePost(slug){
            try{
 return await this.databases.deleteDocument(
    Conf.appwriteDatabaseId,
    Conf.appwriteCollectionId,
    slug

 )
            }
            catch(error){
                throw error
 return false
            }
        }
        async getpost(slug){
            try{
         return await  this.databases.getDocument(
            Conf.appwriteDatabaseId,
            Conf.appwriteCollectionId,
            slug
         )
            }
            catch (error){
                throw error

            }
        }
        async getposts(queries=[Query.equal('status', "active")]){
            try{
              return await this.databases.listDocuments(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                queries,
              
              
              )
            }
            catch(error){
                throw error;
                return false
            }

        }
        async uploadfiles(file){
            try {
                  return await this.bucket.createFile(
                    Conf.appwritebucketId,
                    ID.unique(),
                    file
                  )
            }
            catch(error){
                throw error

            }
           

        }
        async deletefile(fileId){
              try{
return await this.bucket.deleteFile(
    Conf.appwritebucketId,
    fileId
)
 return true
              } catch(error){
                throw error
                return false
              } 

        }
     getfilepreview(fileId){
        return this.bucket.getFilePreview(
            Conf.appwritebucketId,
            fileId
        )
     }
 }
 const service = new service()

export default service