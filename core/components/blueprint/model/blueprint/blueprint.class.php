<?php

class BluePrint
{

    /**
     * @var modX
     */
    public $modx;

    /**
     * @var array
     */
    public $config = array();

    /**
     * BluePrint constructor.
     * @param modX $modx
     * @param array $config
     */
    function __construct(modX $modx, array $config = array())
    {
        $this->modx = $modx;

        $corePath = $this->modx->getOption('blueprint.core_path', $config, MODX_CORE_PATH . 'components/blueprint/');
        $assetsPath = $this->modx->getOption('blueprint.assets_path', null, MODX_ASSETS_PATH . 'components/blueprint/');
        $assetsUrl = $this->modx->getOption('blueprint.assets_url', $config, MODX_ASSETS_URL . 'components/blueprint/');

        $this->config = array_merge(array(
            'corePath' => $corePath,
            'modelPath' => $corePath . 'model/',
            'chunksPath' => $corePath . 'elements/chunks/',
            'snippetsPath' => $corePath . 'elements/snippets/',
            'controllersPath' => $corePath . 'controllers/',
            'processorsPath' => $corePath . 'processors/',
            'templatesPath' => $corePath . 'templates/',

            'assetsPath' => $assetsPath,
            'assetsUrl' => $assetsUrl,

            'jsUrl' => $assetsUrl . 'js/',
            'cssUrl' => $assetsUrl . 'css/',

            'connectorUrl' => $assetsUrl . 'connector.php',
        ), $config);

        $this->modx->addPackage('blueprint', $this->config['modelPath']);
    }

}