<?php

class Skeleton
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
     * Skeleton constructor.
     * @param modX $modx
     * @param array $config
     */
    function __construct(modX $modx, array $config = array())
    {
        $this->modx = $modx;

        $corePath = $this->modx->getOption('skeleton.core_path', $config, MODX_CORE_PATH . 'components/skeleton/');
        $assetsPath = $this->modx->getOption('skeleton.assets_path', null, MODX_ASSETS_PATH . 'components/skeleton/');
        $assetsUrl = $this->modx->getOption('skeleton.assets_url', $config, MODX_ASSETS_URL . 'components/skeleton/');

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

        $this->modx->addPackage('skeleton', $this->config['modelPath']);
    }

}