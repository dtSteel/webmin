/*
 * This file was generated automatically by xsubpp version 1.9508 from the
 * contents of SolarisRBAC.xs. Do not edit this file, edit SolarisRBAC.xs instead.
 *
 *	ANY CHANGES MADE HERE WILL BE LOST!
 *
 */

#line 1 "SolarisRBAC.xs"
#include "EXTERN.h"
#include "perl.h"
#include "XSUB.h"
#include <auth_attr.h>
#include <secdb.h>

#line 17 "SolarisRBAC.c"
XS(XS_Authen__SolarisRBAC_chkauth); /* prototype to pass -Wmissing-prototypes */
XS(XS_Authen__SolarisRBAC_chkauth)
{
    dXSARGS;
    if (items != 2)
	Perl_croak(aTHX_ "Usage: Authen::SolarisRBAC::chkauth(authname, username)");
    {
	char *	authname = (char *)SvPV_nolen(ST(0));
	char *	username = (char *)SvPV_nolen(ST(1));
	int	RETVAL;
	dXSTARG;
#line 14 "SolarisRBAC.xs"
		RETVAL = chkauthattr(authname, username);
#line 31 "SolarisRBAC.c"
	XSprePUSH; PUSHi((IV)RETVAL);
    }
    XSRETURN(1);
}

#ifdef __cplusplus
extern "C"
#endif
XS(boot_Authen__SolarisRBAC); /* prototype to pass -Wmissing-prototypes */
XS(boot_Authen__SolarisRBAC)
{
    dXSARGS;
    char* file = __FILE__;

    XS_VERSION_BOOTCHECK ;

        newXS("Authen::SolarisRBAC::chkauth", XS_Authen__SolarisRBAC_chkauth, file);
    XSRETURN_YES;
}

