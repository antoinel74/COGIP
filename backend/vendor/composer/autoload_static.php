<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit731db5365d8cd92ebe7f50c0b4ac9002
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Whoops\\' => 7,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Whoops\\' => 
        array (
            0 => __DIR__ . '/..' . '/filp/whoops/src/Whoops',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/src',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $prefixesPsr0 = array (
        'B' => 
        array (
            'Bramus' => 
            array (
                0 => __DIR__ . '/..' . '/bramus/router/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit731db5365d8cd92ebe7f50c0b4ac9002::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit731db5365d8cd92ebe7f50c0b4ac9002::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit731db5365d8cd92ebe7f50c0b4ac9002::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit731db5365d8cd92ebe7f50c0b4ac9002::$classMap;

        }, null, ClassLoader::class);
    }
}
