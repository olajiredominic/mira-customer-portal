<?php
  /**
   * undocumented class
   */
  class ClientModel extends Model
  {
    /**
     * Registers a clients into the system
     *
     * @param String $userId UserId of the client
     * @param String $businessName business name  of the client
     * @return boolean, false if !insert OR @return String  userId
     **/
    public function addClient($userId,$businessName)
    {
      $id = uniqid();
      $insert =  $this->insert('clients',['id'=>$id,'user_id'=>$userId,'businessname'=>$businessName]);
      if ($insert['status']) return $id;
      else return false;
    }
    

    /**
     * Retrives a single client entry
     *
     * @param Type $condition Condition to query by
     * @param String $bindString represenntation of values passed e.g name:String,id:integer = 'si'.
     * @return Array $bindValues $values values to be passed to the query
     **/
    public function getClient($condition = '',$bindString='',$bindValues=[])
    {
      $sql = 'SELECT clients.*,name,email,telephone,username FROM clients INNER JOIN users ON users.id = clients.user_id '.$condition;
      $query = $this->query($sql,$bindString,$bindValues); 
      if($query) return $this->row;
      else return false;
    }

    /**
     * Retrieves several comapny entries as an associative array
     *
     * @param Type $condition Condition to query by
     * @param String $bindString represenntation of values passed e.g name:String,id:integer = 'si'.
     * @return Array $bindValues $values values to be passed to the query
     **/
    public function getClients($condition = '',$bindString = '',$bindValues = [])
    {
      $sql = 'SELECT clients.*,name,email,telephone,username FROM clients INNER JOIN users ON users.id = clients.user_id '.$condition;
      $query = $this->query($sql,$bindString,$bindValues); 
      if($query) return $this->rows;
      else return false;
    }

    /**
     * Fetches clients data by quering with its Id
     *
     * @param Int $clientsId ID of the clients to be retrieved
     * @return Array Database clients Obeject upon success @return boolean false on error
     **/
    public function getClientByUserId($clientUserId,$status = 1)
    {
      return $this->getClient('WHERE clients.user_id = ? AND clients.status = ? ','si',[$clientUserId,$status]);
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function getCompanyClients($companyId,$status =1)
    {
      return $this->getClients('WHERE users.company_id = ? AND clients.status = ? ','si',[$companyId,$status]);
    }

    /**
     * Updates client business information
     *
     * @param Type $userId user Id of the client
     * @param Type $data array client data to be updated
     * @return bool
     **/
    public function updateClient($userId,$data = [])
    {
      return $this->update('clients',$data, ['user_id'=>$userId]);
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function delete()
    {
      return $this->update('clients',['status'=>0], ['user_id'=>$userId]);
    }

    /**
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     **/
    public function addClientProducts($userId,$productId,$modules,$cost)
    {
      $id = uniqid();
      $insert =  $this->insert('clientproducts',['id'=>$id,'user_id'=>$userId,'product_id'=>$productId,'modules'=>$modules,'cost'=>$cost]);
      if ($insert['status']) return $id;
      else return false;
    }


    /**
     * Updates client business information
     *
     * @param Type $userId user Id of the client
     * @param Type $data array client data to be updated
     * @return bool
     **/
    public function updateClientProducts($userId,$productId,$data = [])
    {
      return $this->update('clientproducts',$data, ['user_id'=>$userId,'product_id'=>$productId]);
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function getClientProduct($conditon,$bindString,$bindValues)
    {
      
      $sql = 'SELECT *,(SELECT name FROM products WHERE id = product_id) AS name,(SELECT description FROM products WHERE id = product_id) AS description FROM clientproducts '.$condition;
      $query = $this->query($sql,$bindString,$bindValues); 
      if($query) return $this->row;
      else return false;
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function getClientProducts($condition,$bindString,$bindValues)
    {
      
      $sql = 'SELECT *,(SELECT name FROM products WHERE id = product_id) AS name,(SELECT description FROM products WHERE id = product_id) AS description FROM clientproducts '.$condition;
      $query = $this->query($sql,$bindString,$bindValues); 
      if($query) return $this->rows;
      else return false;
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function getClientProductsByClient($clientsId,$status = 1)
    {
      return $this->getClientProducts('WHERE user_id = ? AND status = ?','si',[$clientsId,$status]);
    }
  /**
   * undocumented function summary
   *
   * Undocumented function long description
   *
   * @param Type $var Description
   * @return type
   * @throws conditon
   **/
    public function getClientProductsByClientProducts($clientId,$productId,$status = 1)
    {
      return $this->getClientProducts('WHERE user_id = ? AND product_id AND status = ?','ssi',[$clientId,$productId,$status]);
    }

    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param Type $var Description
     * @return type
     * @throws conditon
     **/
    public function deleteClientProduct($userId,$productId)
    {
      return $this->update('clientproducts',['status'=>0], ['user_id'=>$userId,'product_id'=>$productId]);
    }



    
  }
?>