<?php

namespace Ydm;

require_once __DIR__.'/config.php';
require_once __DIR__.'/../RedBean/rb.php';

class Database extends \R {
    public static function connect() {
        \R::setup(DB.':host='.DB_HOST.';port='.DB_PORT.';dbname='.DB_MAME,DB_USER, DB_PASS);

        $oldToolBox = \R::getToolBox();
        $oldAdapter = $oldToolBox->getDatabaseAdapter();
        $uuidWriter = new UUIDWriterMySQL( $oldAdapter );
        $newRedBean = new \RedBeanPHP\OODB( $uuidWriter );
        $newToolBox = new \RedBeanPHP\ToolBox( $newRedBean, $oldAdapter, $uuidWriter );
        \R::configureFacadeWithToolbox( $newToolBox );
    }
    public static function disconnect() {
        \R::close();
    }
}




class UUIDWriterMySQL extends \RedBeanPHP\QueryWriter\MySQL {

    protected $defaultValue = '@uuid';
    const C_DATATYPE_SPECIAL_UUID  = 97;

    public function __construct( \RedBeanPHP\Adapter\DBAdapter $adapter ) {
        parent::__construct( $adapter );
        $this->addDataType( self::C_DATATYPE_SPECIAL_UUID, 'char(36)' );
    }

    public function createTable( $table ) {
        $table = $this->esc( $table );
        $sql   = "
                CREATE TABLE {$table} (
                id char(36) NOT NULL,
                PRIMARY KEY ( id ))
                ENGINE = InnoDB DEFAULT
                CHARSET=utf8mb4
                COLLATE=utf8mb4_unicode_ci ";
        $this->adapter->exec( $sql );
    }

    public function updateRecord( $table, $updateValues, $id = NULL ) {
        $flagNeedsReturnID = (!$id);
        if ($flagNeedsReturnID) \R::exec('SET @uuid = uuid() ');
        $id = parent::updateRecord( $table, $updateValues, $id );
        if ($flagNeedsReturnID ) $id = \R::getCell('SELECT @uuid');
        return $id;
    }

    public function getTypeForID(){
        return self::C_DATATYPE_SPECIAL_UUID;
    }
}